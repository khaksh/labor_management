    // src/components/JobDetailModal.jsx
    import React from 'react';
    import { useNavigate } from 'react-router-dom'; // Import useNavigate
    // import './JobDetailModal.css'; // We'll create this CSS file next

    const JobDetailModal = ({ job, onClose, onJobUpdate }) => {
      const navigate = useNavigate(); // Initialize navigate

      console.log('JobDetailModal received job prop:', job);
      if (!job) {
        return null; // Don't render anything if no job is selected
      }

      // ADD THESE LOGS:
      if (job.roleRequirements) {
        console.log('job.roleRequirements exists. Type:', typeof job.roleRequirements);
        console.log('Is it an array?', Array.isArray(job.roleRequirements));
        console.log('Length of job.roleRequirements:', job.roleRequirements.length);
        console.log('Contents of job.roleRequirements:', JSON.stringify(job.roleRequirements, null, 2));
        if (job.roleRequirements.length > 0) {
            console.log('First role requirement object:', JSON.stringify(job.roleRequirements[0], null, 2));
            if (job.roleRequirements[0].role) {
                console.log('First role requirement\'s role name:', job.roleRequirements[0].role.name);
            } else {
                console.log('First role requirement is missing the nested .role object');
            }
        }
      } else {
        console.log('job.roleRequirements is undefined or null.');
      }

      // Basic styling for the modal
      const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '30px', // Increased padding
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        width: '80%', // Relative width
        maxWidth: '600px', // Max width
        maxHeight: '90vh', // Max height
        overflowY: 'auto', // Scroll for overflow
        border: '1px solid #ddd', // Subtle border
      };

      const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
      };

      const headerStyle = {
        borderBottom: '1px solid #eee',
        paddingBottom: '15px', // Increased padding
        marginBottom: '20px', // Increased margin
        fontSize: '1.5em', // Larger font size
        color: '#333', // Darker color
      };

      const detailItemStyle = {
        marginBottom: '12px', // Increased margin
        fontSize: '1.05em', // Slightly larger font size
      };

      const strongStyle = {
        color: '#555', // Slightly lighter color for labels
      };

      const listItemStyle = { // Added style for list items for better spacing
        marginBottom: '8px',
      };

      const buttonContainerStyle = { // To hold multiple buttons
        display: 'flex',
        justifyContent: 'flex-end', // Aligns buttons to the right
        gap: '10px', // Space between buttons
        marginTop: '25px',
      };

      const baseButtonStyle = { // Base style for all buttons
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em',
      };

      const primaryButtonStyle = { // For 'Close' or primary actions
        ...baseButtonStyle,
        backgroundColor: '#007bff',
        color: 'white',
      };

      const secondaryButtonStyle = { // For 'Edit' or secondary actions
        ...baseButtonStyle,
        backgroundColor: '#6c757d',
        color: 'white',
      };
      
      const dangerButtonStyle = { // For 'Cancel Job'
        ...baseButtonStyle,
        backgroundColor: '#dc3545',
        color: 'white',
      };

      // Format dates for display (optional, but nicer)
      const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

      const handleCancelJob = async () => {
        if (window.confirm(`Are you sure you want to cancel the job: "${job.title}"? This action cannot be undone.`)) {
          try {
            const response = await fetch(`http://localhost:3001/jobs/${job.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ status: 'cancelled' }), // Send status update
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            console.log('Job cancelled successfully');
            if (onJobUpdate) {
              onJobUpdate(); // Call the callback to refresh jobs on the dashboard
            }
            onClose(); // Close the modal
          } catch (error) {
            console.error('Failed to cancel job:', error);
            alert(`Failed to cancel job: ${error.message}`); // Show error to user
          }
        }
      };

      const handleEditJob = () => {
        console.log("Navigating to edit job:", job.id);
        onClose(); // Close the modal before navigating
        navigate(`/jobs/${job.id}/edit`); // Navigate to the edit page
      };

      return (
        <>
          <div style={overlayStyle} onClick={onClose} />
          <div style={modalStyle}>
            <h2 style={headerStyle}>{job.title || 'Job Details'}</h2>
            <div style={detailItemStyle}><strong style={strongStyle}>Status:</strong> {job.status || 'N/A'}</div>
            <div style={detailItemStyle}><strong style={strongStyle}>Location:</strong> {job.location || 'N/A'}</div>
            <div style={detailItemStyle}><strong style={strongStyle}>Starts:</strong> {formatDate(job.startDatetime)}</div>
            <div style={detailItemStyle}><strong style={strongStyle}>Ends:</strong> {formatDate(job.endDatetime)}</div>
            <div style={detailItemStyle}>
              <strong style={strongStyle}>Description:</strong>
              <p style={{ marginTop: '5px', lineHeight: '1.6' }}>{job.description || 'No description provided.'}</p>
            </div>
            {job.organizerName && (
              <div style={detailItemStyle}><strong style={strongStyle}>Organizer:</strong> {job.organizerName}</div>
            )}
            
            {/* Placeholder for Role Requirements */}
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
              <h3 style={{ fontSize: '1.2em', color: '#333', marginBottom: '10px' }}>Role Requirements</h3>
              {job.roleRequirements && job.roleRequirements.length > 0 ? (
                <ul>
                  {job.roleRequirements.map(req => (
                    <li key={req.id} style={listItemStyle}>
                      {/* Make sure req.role exists before trying to access req.role.name */}
                      Role: {req.role ? req.role.name : 'Role N/A'} / Needed: {req.numberOfWorkersNeeded} / Rate: ${req.payRateForJob}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No specific role requirements listed for this job.</p>
              )}
            </div>

            {/* Updated Assigned Workers Section */}
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
              <h3 style={{ fontSize: '1.2em', color: '#333', marginBottom: '10px' }}>Assigned Workers</h3>
              {job.assignments && job.assignments.length > 0 ? (
                <ul>
                  {job.assignments.map(assignment => (
                    <li key={assignment.id} style={listItemStyle}>
                      <strong>{assignment.worker ? assignment.worker.name : 'Unknown Worker'}</strong>
                      {' as '}
                      <em>{assignment.role ? assignment.role.name : 'Unknown Role'}</em>
                      {/* Optionally display hours if tracked: */}
                      {/* {assignment.actualHoursWorked && ` (${assignment.actualHoursWorked} hrs logged)`} */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No workers assigned to this job yet.</p>
              )}
            </div>

            <div style={buttonContainerStyle}>
                {/* Only show Cancel Job button if the job is not already cancelled or completed */}
                {job.status !== 'cancelled' && job.status !== 'completed' && (
                    <button style={dangerButtonStyle} onClick={handleCancelJob}>Cancel Job</button>
                )}
                <button style={secondaryButtonStyle} onClick={handleEditJob}>Edit Job</button>
                <button style={primaryButtonStyle} onClick={onClose}>Close</button>
            </div>
          </div>
        </>
      );
    };

    export default JobDetailModal;