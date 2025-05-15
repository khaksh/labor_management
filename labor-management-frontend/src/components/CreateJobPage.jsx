import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateJobPage = () => {
  const navigate = useNavigate();

  // Form field states - Initialize with defaults for a new job
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDatetime, setStartDatetime] = useState('');
  const [endDatetime, setEndDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [status, setStatus] = useState('draft'); // Default status for new jobs

  // State for role requirements
  const [currentRoleRequirements, setCurrentRoleRequirements] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);

  // No loading state needed for fetching existing job, but maybe for roles
  const [rolesLoading, setRolesLoading] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch all available roles for the dropdown
  useEffect(() => {
    const fetchRoles = async () => {
      setRolesLoading(true);
      try {
        const response = await fetch('http://localhost:3001/roles');
        if (!response.ok) {
          throw new Error('Failed to fetch roles');
        }
        const rolesData = await response.json();
        setAvailableRoles(rolesData);
      } catch (err) {
        console.error(err);
        setSubmitError("Failed to load available roles. Please try again later."); // Show error
      } finally {
        setRolesLoading(false);
      }
    };
    fetchRoles();
  }, []);

  // --- Handlers for Role Requirements (can be identical to EditJobPage) ---
  const handleAddRoleRequirement = () => {
    setCurrentRoleRequirements(prevReqs => [
      ...prevReqs,
      {
        id: `new-${Date.now()}`,
        roleId: availableRoles.length > 0 ? availableRoles[0].id : '',
        numberOfWorkersNeeded: 1,
        payRateForJob: availableRoles.length > 0 ? (availableRoles.find(r => r.id === (availableRoles[0].id))?.defaultPayRate || '0.00') : '0.00',
      }
    ]);
  };

  const handleRoleRequirementChange = (index, field, value) => {
    const updatedReqs = [...currentRoleRequirements];
    const requirementToUpdate = { ...updatedReqs[index] };

    if (field === 'numberOfWorkersNeeded') {
      requirementToUpdate[field] = parseInt(value, 10) || 0;
    } else if (field === 'payRateForJob') {
      if (/^\d*\.?\d*$/.test(value)) { // Basic decimal validation
        requirementToUpdate[field] = value;
      }
    } else if (field === 'roleId') { // roleId changed
      requirementToUpdate[field] = value;
      // Optionally, auto-fill defaultPayRate when role changes
      const selectedRole = availableRoles.find(r => r.id === value);
      if (selectedRole && selectedRole.defaultPayRate) {
        requirementToUpdate.payRateForJob = String(selectedRole.defaultPayRate);
      } else if (selectedRole) { // Role selected but no default rate
        requirementToUpdate.payRateForJob = '0.00';
      }
    }
    updatedReqs[index] = requirementToUpdate;
    setCurrentRoleRequirements(updatedReqs);
  };

  const handleRemoveRoleRequirement = (idToRemove) => {
    setCurrentRoleRequirements(prevReqs => prevReqs.filter(req => req.id !== idToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rolesLoading) {
        setSubmitError("Roles are still loading, please wait.");
        return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const roleRequirementsToSubmit = currentRoleRequirements.map(req => ({
      roleId: req.roleId,
      numberOfWorkersNeeded: parseInt(req.numberOfWorkersNeeded, 10),
      payRateForJob: String(req.payRateForJob)
    })).filter(req => req.roleId && req.numberOfWorkersNeeded > 0 && !isNaN(parseFloat(req.payRateForJob)));

    const newJobData = {
      title,
      location,
      startDatetime: new Date(startDatetime).toISOString(),
      endDatetime: new Date(endDatetime).toISOString(),
      description,
      organizerName,
      status,
      roleRequirements: roleRequirementsToSubmit,
    };

    // Basic validation
    if (!title.trim() || !location.trim() || !startDatetime || !endDatetime) {
        setSubmitError("Please fill in all required fields: Title, Location, Start Date, and End Date.");
        setIsSubmitting(false);
        return;
    }
    if (new Date(startDatetime) >= new Date(endDatetime)) {
        setSubmitError("End date and time must be after start date and time.");
        setIsSubmitting(false);
        return;
    }
     for (const req of roleRequirementsToSubmit) {
        if (!req.roleId || !availableRoles.find(r => r.id === req.roleId)) {
            setSubmitError(`Invalid Role ID selected. Please select a valid role for all requirements.`);
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


    console.log("Submitting new job data:", newJobData);

    try {
      const response = await fetch(`http://localhost:3001/jobs`, { // POST to /jobs
        method: 'POST', // Changed to POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJobData),
      });

      if (!response.ok) {
        let errorMsg = `Failed to create job. Status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
        } catch (er) { /* response might not be json */ }
        throw new Error(errorMsg);
      }
      
      alert('Job created successfully!');
      navigate('/'); // Navigate back to dashboard
    } catch (error) {
      console.error("Failed to create job:", error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (rolesLoading) return <p>Loading available roles...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Create New Job</h1>
      <form onSubmit={handleSubmit}>
        {/* --- Basic Job Fields (similar to EditJobPage, but using state directly) --- */}
        <div>
          <label htmlFor="title">Job Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required disabled={isSubmitting}/>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required disabled={isSubmitting}/>
        </div>
        <div>
            <label htmlFor="startDatetime">Start Date & Time:</label>
            <input type="datetime-local" id="startDatetime" value={startDatetime} onChange={(e) => setStartDatetime(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required disabled={isSubmitting}/>
        </div>
        <div>
            <label htmlFor="endDatetime">End Date & Time:</label>
            <input type="datetime-local" id="endDatetime" value={endDatetime} onChange={(e) => setEndDatetime(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required disabled={isSubmitting}/>
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} disabled={isSubmitting}/>
        </div>
         <div>
            <label htmlFor="organizerName">Organizer Name (Optional):</label>
            <input type="text" id="organizerName" value={organizerName} onChange={(e) => setOrganizerName(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }} disabled={isSubmitting}/>
        </div>
        <div>
            <label htmlFor="status">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }} required disabled={isSubmitting}>
                <option value="draft">Draft</option>
                <option value="confirmed">Confirmed</option>
                {/* Typically, 'completed' and 'cancelled' are set via other actions, not at creation */}
            </select>
        </div>

        {/* --- Editable Role Requirements Section (can be identical to EditJobPage) --- */}
        <div style={{ marginTop: '20px', marginBottom: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          <h3>Role Requirements:</h3>
          {currentRoleRequirements.map((req, index) => (
            <div key={req.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '4px' }}>
              <div style={{flexGrow: 1}}>
                <label htmlFor={`role-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}>Role:</label>
                <select id={`role-${req.id}`} value={req.roleId} onChange={(e) => handleRoleRequirementChange(index, 'roleId', e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }} disabled={isSubmitting || rolesLoading}>
                  <option value="">Select Role</option>
                  {availableRoles.map(role => (<option key={role.id} value={role.id}>{role.name}</option>))}
                </select>
              </div>
              <div style={{width: '100px'}}>
                <label htmlFor={`workers-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}># Workers:</label>
                <input type="number" id={`workers-${req.id}`} value={req.numberOfWorkersNeeded} onChange={(e) => handleRoleRequirementChange(index, 'numberOfWorkersNeeded', e.target.value)} min="1" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }} disabled={isSubmitting}/>
              </div>
              <div style={{width: '120px'}}>
                <label htmlFor={`rate-${req.id}`} style={{display: 'block', marginBottom: '3px', fontSize: '0.9em'}}>Pay Rate ($/hr):</label>
                <input type="text" id={`rate-${req.id}`} value={req.payRateForJob} onChange={(e) => handleRoleRequirementChange(index, 'payRateForJob', e.target.value)} placeholder="e.g., 25.50" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'  }} disabled={isSubmitting}/>
              </div>
              <button type="button" onClick={() => handleRemoveRoleRequirement(req.id)} style={{ padding: '8px 12px', backgroundColor: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-end' }} disabled={isSubmitting}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddRoleRequirement} style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#1890ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} disabled={isSubmitting || rolesLoading}>
            + Add Role Requirement
          </button>
        </div>
        
        {submitError && <p style={{ color: 'red', marginBottom: '10px' }}>Error: {submitError}</p>}

        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} disabled={isSubmitting || rolesLoading}>
            {isSubmitting ? 'Creating Job...' : 'Create Job'}
          </button>
          <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} disabled={isSubmitting}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobPage; 