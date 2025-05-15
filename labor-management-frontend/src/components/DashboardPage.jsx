    // src/components/DashboardPage.jsx
    import React, { useState, useEffect, useCallback } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
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

    const DashboardPage = () => {
      const navigate = useNavigate();
      const [jobs, setJobs] = useState([]);
      const [calendarEvents, setCalendarEvents] = useState([]);
      const [selectedJob, setSelectedJob] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date(2024, 7, 1));

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

      const handleNavigateCalendar = useCallback((newDate) => {
        setCurrentCalendarDate(newDate);
      }, []);

      const handleJobUpdate = () => {
        fetchJobs();
      };

      const handleNavigateToCreateJob = () => {
        navigate('/jobs/new');
      };

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
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            style={{ height: 'calc(100% - 70px)' }}
            defaultView="month"
            views={['month', 'week', 'day', 'agenda']}
            onSelectEvent={handleSelectEvent}
            selectable
            date={currentCalendarDate}
            onNavigate={handleNavigateCalendar}
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