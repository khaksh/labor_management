    // src/components/DashboardPage.jsx
    import React, { useState, useEffect, useCallback } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
    import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
    import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
    import format from 'date-fns/format';
    import parse from 'date-fns/parse';
    import startOfWeek from 'date-fns/startOfWeek';
    import getDay from 'date-fns/getDay';
    import enUS from 'date-fns/locale/en-US';
    import JobDetailModal from './JobDetailModal';
    import 'react-big-calendar/lib/css/react-big-calendar.css';

    const locales = {
      'en-US': enUS,
    };

    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    });

    const DnDCalendar = withDragAndDrop(BigCalendar);

    const DashboardPage = () => {
      const navigate = useNavigate();
      const [jobs, setJobs] = useState([]);
      const [calendarEvents, setCalendarEvents] = useState([]);
      const [selectedJob, setSelectedJob] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date(2024, 7, 1));
      const [currentView, setCurrentView] = useState('month');

      const fetchJobs = useCallback(async () => {
        try {
          console.log("Attempting to fetch jobs...");
          const response = await fetch('http://localhost:3001/jobs');
          console.log("Fetch response status:", response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const fetchedJobs = await response.json();
          console.log("Fetched jobs from API:", fetchedJobs);
          setJobs(fetchedJobs);

          if (!fetchedJobs || fetchedJobs.length === 0) {
            console.log("No jobs fetched or fetchedJobs is empty.");
            setCalendarEvents([]);
            return;
          }

          const transformedEvents = fetchedJobs.map(job => {
            if (!job.startDatetime || !job.endDatetime) {
              console.warn("Job missing startDatetime or endDatetime:", job);
              return null;
            }
            const start = new Date(job.startDatetime);
            const end = new Date(job.endDatetime);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                console.warn("Invalid date detected for job:", job.title, job.startDatetime, job.endDatetime);
                return null;
            }

            return {
              id: job.id,
              title: job.title || "Untitled Job",
              start: start,
              end: end,
              allDay: false,
              resource: job,
            };
          }).filter(event => event !== null);

          console.log("Transformed events for calendar:", transformedEvents);
          setCalendarEvents(transformedEvents);

        } catch (error) {
          console.error("Failed to fetch jobs:", error);
        }
      }, []);

      useEffect(() => {
        fetchJobs();
      }, [fetchJobs]);

      const handleSelectEvent = (event) => {
        console.log('Selected calendar event raw object:', event);
        console.log('Job resource being passed to modal:', event.resource);
        setSelectedJob(event.resource);
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
      };

      const handleNavigateCalendar = useCallback((newDate, view) => {
        setCurrentCalendarDate(newDate);
        setCurrentView(view);
      }, []);

      const handleJobUpdate = () => {
        fetchJobs();
      };

      const handleNavigateToCreateJob = () => {
        navigate('/jobs/new');
      };

      // Enhanced Handler for event drag/drop or resize
      const handleEventTimeUpdate = useCallback(async (args) => {
        console.log('HANDLE_EVENT_TIME_UPDATE CALLED (for drop or resize). Args:', args);

        const { event, start, end } = args;
        const jobId = event.id; 

        if (!jobId || !start || !end) {
          console.error("handleEventTimeUpdate: Invalid event data for time update:", { event, start, end });
          alert("Could not update job time: invalid event data.");
          return;
        }
        
        // Prevent updates if the time hasn't actually changed
        if (new Date(event.start).getTime() === new Date(start).getTime() &&
            new Date(event.end).getTime() === new Date(end).getTime()) {
          console.log("handleEventTimeUpdate: Event times unchanged, no update needed.");
          return;
        }

        const payload = {
          startDatetime: start.toISOString(),
          endDatetime: end.toISOString(),
        };
        console.log(`handleEventTimeUpdate: Attempting to update job ${jobId} with payload:`, payload);

        try {
          const response = await fetch(`http://localhost:3001/jobs/${jobId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          let responseData;
          try {
            responseData = await response.json(); 
          } catch (e) {
            console.error("handleEventTimeUpdate: Failed to parse server response as JSON", e);
          }
          
          console.log("handleEventTimeUpdate: Server PUT response status:", response.status);
          console.log("handleEventTimeUpdate: Server PUT response data:", responseData);

          if (!response.ok) {
            const errorMessage = (responseData && responseData.message) 
                                 ? responseData.message 
                                 : `Failed to update job time. Server responded with ${response.status}`;
            throw new Error(errorMessage);
          }
          
          console.log('handleEventTimeUpdate: Job time updated successfully on server. Response:', responseData);
          
          if (responseData && responseData.startDatetime && responseData.endDatetime) {
              const serverStartTime = new Date(responseData.startDatetime).getTime();
              const serverEndTime = new Date(responseData.endDatetime).getTime();
              const newStartTime = new Date(start).getTime(); 
              const newEndTime = new Date(end).getTime();     

              if (serverStartTime !== newStartTime || serverEndTime !== newEndTime) {
                  console.warn("handleEventTimeUpdate: MISMATCH: Server response times do not match updated times.", {
                    sentStart: start.toISOString(), serverStart: responseData.startDatetime,
                    sentEnd: end.toISOString(), serverEnd: responseData.endDatetime 
                  });
              } else {
                  console.log("handleEventTimeUpdate: CONFIRMED: Server response times match updated times.");
              }
          } else {
              console.warn("handleEventTimeUpdate: Server response for successful PUT did not contain expected start/end datetimes or was not parsed correctly.", responseData);
          }

          fetchJobs(); 
        } catch (error) {
          console.error('handleEventTimeUpdate: Failed to update job time:', error);
          alert(`Error updating job time: ${error.message}`);
          fetchJobs(); 
        }
      }, [fetchJobs]);

      // Handler for selecting a day slot
      const handleSelectSlot = useCallback((slotInfo) => {
        // Navigate to day view when a day is clicked in month/week view
        if (slotInfo.action === 'click' || slotInfo.action === 'doubleClick') { // 'click' for day numbers, 'doubleClick' might also be relevant
          setCurrentCalendarDate(new Date(slotInfo.start));
          setCurrentView('day');
        }
        // You can also handle 'select' action if you want to allow dragging to select a range
        // and then potentially do something with that range, but for just navigating to day view,
        // 'click' is usually sufficient.
      }, []); // State setters are stable

      // Added: Handler for when dragging of an event starts
      const handleDragStart = useCallback(({ event, action }) => {
        console.log('Calendar event drag started (from custom handleDragStart):', {
          eventId: event.id,
          eventTitle: event.title,
          currentStartTime: event.start,
          action: action
        });
        // You could also set some state here if needed, e.g., to change UI during drag
      }, []);

      return (
        <div style={{ height: '90vh', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Job Dashboard</h1>
            <button
              onClick={handleNavigateToCreateJob}
              style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1em' }}
            >
              + Add New Job
            </button>
          </div>
          <DnDCalendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            style={{ height: 'calc(100% - 70px)' }}
            views={['month', 'week', 'day', 'agenda']}
            onSelectEvent={handleSelectEvent}
            selectable
            date={currentCalendarDate}
            view={currentView}
            onNavigate={handleNavigateCalendar}
            onView={setCurrentView}
            onSelectSlot={handleSelectSlot}
            onEventDrop={handleEventTimeUpdate}
            onEventResize={handleEventTimeUpdate}
            resizable
            onDragStart={handleDragStart}
          />

          {isModalOpen && selectedJob && (
            <JobDetailModal
              job={selectedJob}
              onClose={handleCloseModal}
              onJobUpdate={handleJobUpdate}
            />
          )}
        </div>
      );
    };

    export default DashboardPage;