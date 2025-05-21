import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DashboardPage from './components/DashboardPage';
import EditJobPage from './components/EditJobPage';
import CreateJobPage from './components/CreateJobPage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div>
          <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Dashboard</Link>
          </nav>

          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/jobs/:jobId/edit" element={<EditJobPage />} />
            <Route path="/jobs/new" element={<CreateJobPage />} />
            <Route path="*" element={<div><h2>404 Not Found</h2><Link to="/">Go to Dashboard</Link></div>} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
