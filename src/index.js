import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmittedPage from './SubmittedPage';
import Infra from './Infra';
import Ticket from './Ticket';
import Logsfile from './Logsfile';
import Apm from './Apm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Apm" element={<Apm />} />
        <Route path="/App" element={<App />} />
        <Route path="/Infra" element={<Infra />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Logsfile" element={<Logsfile />} />
        <Route path="/submitted" element={<SubmittedPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
