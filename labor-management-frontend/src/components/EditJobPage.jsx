import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditJobPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // State for the original job data (used for comparison or reset if needed)
  // const [originalJob, setOriginalJob] = useState(null); // Optional

  // Form field states
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDatetime, setStartDatetime] = useState('');
  const [endDatetime, setEndDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [organizerName, setOrganizerName] = useState(''); // Assuming this might be editable
  const [status, setStatus] = useState(''); // Status might be editable here too
  // We'll handle roleRequirements separately

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null); // For errors during form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store the fetched role requirements to display and potentially pass to the PUT request
  const [currentRoleRequirements, setCurrentRoleRequirements] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]); // To store roles fetched from /roles

  // State for creating a new role
  const [showCreateRoleForm, setShowCreateRoleForm] = useState(false);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePayRate, setNewRolePayRate] = useState('');
  const [createRoleError, setCreateRoleError] = useState(null);
  const [isCreatingRole, setIsCreatingRole] = useState(false);

  // Fetch all available roles for the dropdown
  const fetchRoles = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/roles');
      if (!response.ok) {
        throw new Error('Failed to fetch roles');
      }
      const rolesData = await response.json();
      setAvailableRoles(rolesData);
    } catch (err) {
      console.error(err);
      // setError(err.message); // Optionally set an error state for roles fetching
    }
  }, []);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const fetchJobDetails = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/jobs/${jobId}`);
      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
        } catch (e) { /* Ignore if response not json */ }
        throw new Error(errorMsg);
      }
      const data = await response.json();
      // setOriginalJob(data); // Optional
      
      // Populate form state
      setTitle(data.title || '');
      setLocation(data.location || '');
      // For datetime-local inputs, the value needs to be in 'YYYY-MM-DDTHH:mm' format
      setStartDatetime(data.startDatetime ? new Date(data.startDatetime).toISOString().substring(0, 16) : '');
      setEndDatetime(data.endDatetime ? new Date(data.endDatetime).toISOString().substring(0, 16) : '');
      setDescription(data.description || '');
      setOrganizerName(data.organizerName || '');
      setStatus(data.status || ''); // e.g., 'draft', 'confirmed'
      
      // Ensure roleRequirements from job data have a unique temporary ID for mapping keys if needed,
      // and values are appropriate for form inputs.
      // The actual ID from the database is `req.id`. `roleId` is the FK to the Role table.
      setCurrentRoleRequirements(data.roleRequirements?.map((req, index) => ({
          id: req.id || `temp-${index}`, // Use existing ID or a temporary one for new/unsaved items
          roleId: req.role?.id || req.roleId || '', // Prefer role.id, fallback to roleId
          numberOfWorkersNeeded: req.numberOfWorkersNeeded || 1,
          payRateForJob: String(req.payRateForJob || '0.00'), // Ensure it's a string for input
          // Keep the original role object if present, useful for display name
          role: req.role 
      })) || []);

    } catch (err) {
      console.error("Failed to fetch job details:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId, fetchJobDetails]);

  // --- Handler for Creating a New Role ---
  const handleCreateRole = async () => {
    if (!newRoleName.trim()) {
      setCreateRoleError("Role name cannot be empty.");
      return;
    }
    // Basic validation for pay rate (optional, can be handled by backend too)
    const payRate = parseFloat(newRolePayRate);
    if (newRolePayRate.trim() && (isNaN(payRate) || payRate < 0)) {
        setCreateRoleError("Invalid pay rate. Must be a non-negative number.");
        return;
    }

    setIsCreatingRole(true);
    setCreateRoleError(null);

    try {
        const response = await fetch('http://localhost:3001/roles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: newRoleName,
                ...(newRolePayRate.trim() && { defaultPayRate: newRolePayRate }) // Send only if provided
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to create role. Status: ${response.status}`);
        }

        const createdRole = await response.json();
        alert('Role created successfully!');
        setNewRoleName('');
        setNewRolePayRate('');
        setShowCreateRoleForm(false);
        await fetchRoles(); // Re-fetch roles to include the new one

        // Optionally, add the new role to the current job's requirements
        // Or select it in a dropdown if that's the UX flow.
        // For now, just refetching roles.

    } catch (error) {
        console.error("Failed to create role:", error);
        setCreateRoleError(error.message);
    } finally {
        setIsCreatingRole(false);
    }
  };

  // --- Handlers for Role Requirements ---
  const handleAddRoleRequirement = () => {
    setCurrentRoleRequirements(prevReqs => [
      ...prevReqs,
      {
        id: `new-${Date.now()}`, // Temporary unique ID for a new unsaved requirement
        roleId: availableRoles.length > 0 ? availableRoles[0].id : '', // Default to first available role or empty
        numberOfWorkersNeeded: 1,
        payRateForJob: '0.00',
      }
    ]);
  };

  const handleRoleRequirementChange = (index, field, value) => {
    const updatedReqs = [...currentRoleRequirements];
    const requirementToUpdate = { ...updatedReqs[index] };

    if (field === 'numberOfWorkersNeeded') {
        requirementToUpdate[field] = parseInt(value, 10) || 0;
    } else if (field === 'payRateForJob') {
        // Allow decimal numbers, basic validation
        if (/^\d*\.?\d*$/.test(value)) {
            requirementToUpdate[field] = value;
        }
    } else { // For roleId
        requirementToUpdate[field] = value;
    }
    
    updatedReqs[index] = requirementToUpdate;
    setCurrentRoleRequirements(updatedReqs);
  };

  const handleRemoveRoleRequirement = (idToRemove) => {
    // Filter out by the unique 'id' (either from DB or temp id for new ones)
    setCurrentRoleRequirements(prevReqs => prevReqs.filter(req => req.id !== idToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare roleRequirements for submission:
    // The backend expects roleId, numberOfWorkersNeeded, payRateForJob.
    // It doesn't need the temporary 'id' or the nested 'role' object.
    const roleRequirementsToSubmit = currentRoleRequirements.map(req => {
        if (!req.roleId || req.numberOfWorkersNeeded <= 0 || isNaN(parseFloat(req.payRateForJob))) {
            // This is a client-side validation. Consider marking fields as invalid.
            // For now, we might filter out invalid ones or rely on backend validation.
            // Throwing an error here would stop submission.
            // For simplicity in this step, we assume items in currentRoleRequirements are valid enough to try submitting.
            // A more robust solution would have per-field validation and error display.
        }
        return {
            roleId: req.roleId,
            numberOfWorkersNeeded: parseInt(req.numberOfWorkersNeeded, 10),
            payRateForJob: String(req.payRateForJob) // Ensure it's a string
        };
    }).filter(req => req.roleId && req.numberOfWorkersNeeded > 0 && !isNaN(parseFloat(req.payRateForJob))); // Basic filter for valid items

    const updatedJobData = {
      title,
      location,
      startDatetime: new Date(startDatetime).toISOString(),
      endDatetime: new Date(endDatetime).toISOString(),
      description,
      organizerName,
      status,
      roleRequirements: roleRequirementsToSubmit, // Include the processed role requirements
    };

    if (new Date(startDatetime) >= new Date(endDatetime)) {
        setSubmitError("End date and time must be after start date and time.");
        setIsSubmitting(false);
        return;
    }
    
    // Basic check for role requirements before submitting
    for (const req of roleRequirementsToSubmit) {
        if (!req.roleId || !availableRoles.find(r => r.id === req.roleId)) {
            setSubmitError(`Invalid Role ID selected in one of the requirements. Please select a valid role.`);
            setIsSubmitting(false);
            return;
        }
        if (req.numberOfWorkersNeeded <= 0) {
            setSubmitError(`Number of workers must be greater than 0 for all role requirements.`);
            setIsSubmitting(false);
            return;
        }
        if (isNaN(parseFloat(req.payRateForJob)) || parseFloat(req.payRateForJob) < 0) {
            setSubmitError(`Pay rate must be a valid non-negative number for all role requirements.`);
            setIsSubmitting(false);
            return;
        }
    }

    console.log("Submitting updated job data:", updatedJobData);

    try {
      const response = await fetch(`http://localhost:3001/jobs/${jobId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedJobData),
      });

      if (!response.ok) {
        let errorMsg = `Failed to update job. Status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
        } catch (e) { /* response might not be json */ }
        throw new Error(errorMsg);
      }
      
      alert('Job updated successfully!');
      fetchJobDetails(); // Re-fetch job details to get updated IDs for roleRequirements if any were new
      // Or navigate away: navigate('/'); 
    } catch (error) {
      console.error("Failed to update job:", error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading && !availableRoles.length) return <p>Loading job details and roles...</p>; // Combined loading
  if (error) return <p style={{color: 'red'}}>Error loading job: {error} <Link to="/">Go to Dashboard</Link></p>;
  // If !job, it might be because fetchJobDetails cleared it due to an error, error state should cover this.

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Edit Job: {title || 'Loading...'}</h1> {/* Display title from state */}
      <form onSubmit={handleSubmit}>
        {/* --- Basic Job Fields --- */}
        <div>
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
            <label htmlFor="startDatetime">Start Date & Time:</label>
            <input
                type="datetime-local"
                id="startDatetime"
                value={startDatetime}
                onChange={(e) => setStartDatetime(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                required
                disabled={isSubmitting}
            />
        </div>
        <div>
            <label htmlFor="endDatetime">End Date & Time:</label>
            <input
                type="datetime-local"
                id="endDatetime"
                value={endDatetime}
                onChange={(e) => setEndDatetime(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                required
                disabled={isSubmitting}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                disabled={isSubmitting}
            />
        </div>
         <div>
            <label htmlFor="organizerName">Organizer Name:</label>
            <input
                type="text"
                id="organizerName"
                value={organizerName}
                onChange={(e) => setOrganizerName(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                disabled={isSubmitting}
            />
        </div>
        <div>
            <label htmlFor="status">Status:</label>
            <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
                required
                disabled={isSubmitting || status === 'cancelled' || status === 'completed'} // Optionally disable if already cancelled/completed
            >
                <option value="draft">Draft</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option> {/* Should match your JobStatus enum */}
            </select>
        </div>

        {/* --- Editable Role Requirements Section --- */}
        <div style={{ marginTop: '20px', marginBottom: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          <h3>Role Requirements:</h3>

          {/* Button to toggle Create New Role form */}
          {!showCreateRoleForm && (
            <button
              type="button"
              onClick={() => setShowCreateRoleForm(true)}
              style={{ marginBottom: '15px', padding: '8px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              disabled={isSubmitting || isCreatingRole}
            >
              + Create New Role
            </button>
          )}

          {/* Create New Role Form */}
          {showCreateRoleForm && (
            <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #d0d0d0', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
              <h4>Create a New Role</h4>
              <div>
                <label htmlFor="newRoleName">Role Name:</label>
                <input
                  type="text"
                  id="newRoleName"
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                  style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  disabled={isCreatingRole}
                />
              </div>
              <div>
                <label htmlFor="newRolePayRate">Default Pay Rate ($/hr, optional):</label>
                <input
                  type="text" // Using text for flexible input, validation on submit
                  id="newRolePayRate"
                  value={newRolePayRate}
                  onChange={(e) => setNewRolePayRate(e.target.value)}
                  placeholder="e.g., 20.00"
                  style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  disabled={isCreatingRole}
                />
              </div>
              {createRoleError && <p style={{ color: 'red', fontSize: '0.9em', marginBottom: '10px' }}>{createRoleError}</p>}
              <button
                type="button"
                onClick={handleCreateRole}
                style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
                disabled={isCreatingRole || !newRoleName.trim()}
              >
                {isCreatingRole ? 'Saving Role...' : 'Save Role'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCreateRoleForm(false);
                  setNewRoleName('');
                  setNewRolePayRate('');
                  setCreateRoleError(null);
                }}
                style={{ padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                disabled={isCreatingRole}
              >
                Cancel
              </button>
            </div>
          )}

          {currentRoleRequirements.map((req, index) => (
            <div key={req.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '4px' }}>
              <div style={{flexGrow: 1}}>
                <label htmlFor={`role-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}>Role:</label>
                <select
                  id={`role-${req.id}`}
                  value={req.roleId}
                  onChange={(e) => handleRoleRequirementChange(index, 'roleId', e.target.value)}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }}
                  disabled={isSubmitting}
                >
                  <option value="">Select Role</option>
                  {availableRoles.map(role => (
                    <option key={role.id} value={role.id}>{role.name}</option>
                  ))}
                </select>
              </div>
              <div style={{width: '100px'}}>
                <label htmlFor={`workers-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}># Workers:</label>
                <input
                  type="number"
                  id={`workers-${req.id}`}
                  value={req.numberOfWorkersNeeded}
                  onChange={(e) => handleRoleRequirementChange(index, 'numberOfWorkersNeeded', e.target.value)}
                  min="1"
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }}
                  disabled={isSubmitting}
                />
              </div>
              <div style={{width: '120px'}}>
                <label htmlFor={`rate-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}>Pay Rate ($/hr):</label>
                <input
                  type="text" // Use text to allow decimal input easily, validation in handler
                  id={`rate-${req.id}`}
                  value={req.payRateForJob}
                  onChange={(e) => handleRoleRequirementChange(index, 'payRateForJob', e.target.value)}
                  placeholder="e.g., 25.50"
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }}
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveRoleRequirement(req.id)}
                style={{ padding: '8px 12px', backgroundColor: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-end' }}
                disabled={isSubmitting}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddRoleRequirement}
            style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#1890ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            disabled={isSubmitting}
          >
            + Add Role Requirement
          </button>
        </div>
        
        {submitError && <p style={{ color: 'red', marginBottom: '10px' }}>Error: {submitError}</p>}

        <div style={{ marginTop: '20px' }}>
          <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPage; 