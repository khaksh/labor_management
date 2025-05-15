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
      setCurrentRoleRequirements(data.roleRequirements || []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const updatedJobData = {
      title,
      location,
      startDatetime: new Date(startDatetime).toISOString(), // Convert back to ISO string for backend
      endDatetime: new Date(endDatetime).toISOString(),   // Convert back to ISO string for backend
      description,
      organizerName,
      status,
      // For now, we are NOT sending roleRequirements in the PUT for basic field updates
      // If you want to update them, you'd include them here.
      // roleRequirements: currentRoleRequirements.map(r => ({...r, payRateForJob: String(r.payRateForJob) })) // Example if sending them
    };

    // Basic validation: Ensure start is before end
    if (new Date(startDatetime) >= new Date(endDatetime)) {
        setSubmitError("End date and time must be after start date and time.");
        setIsSubmitting(false);
        return;
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
      
      // On successful update
      alert('Job updated successfully!'); // Or use a more subtle notification
      navigate('/'); // Navigate back to dashboard
    } catch (error) {
      console.error("Failed to update job:", error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <p>Loading job details...</p>;
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


        {/* --- Role Requirements (Display Only For Now) --- */}
        <div style={{ marginTop: '20px', marginBottom: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          <h3>Role Requirements:</h3>
          {currentRoleRequirements && currentRoleRequirements.length > 0 ? (
            <ul>
              {currentRoleRequirements.map(req => (
                <li key={req.id || req.roleId}> {/* Fallback key if req.id isn't available pre-save */}
                  {req.role?.name || `Role ID: ${req.roleId}`}: {req.numberOfWorkersNeeded} needed @ ${req.payRateForJob}/hr
                </li>
              ))}
            </ul>
          ) : (
            <p>No role requirements specified for this job.</p>
          )}
          <p><em>(Editing role requirements in this form will be implemented separately.)</em></p>
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