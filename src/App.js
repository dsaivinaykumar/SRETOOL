import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [selectedMetric, setSelectedMetric] = useState('');
  const [cluster, setCluster] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [transactionName, setTransactionName] = useState('');
  const [url, setUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleMetricChange = (e) => {
    setSelectedMetric(e.target.value);
    validateForm(e.target.value, cluster, serviceName, transactionName, url);
  };

  const handleClusterChange = (e) => {
    setCluster(e.target.value);
    validateForm(selectedMetric, e.target.value, serviceName, transactionName, url);
  };

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
    validateForm(selectedMetric, cluster, e.target.value, transactionName, url);
  };

  const handleTransactionNameChange = (e) => {
    setTransactionName(e.target.value);
    validateForm(selectedMetric, cluster, serviceName, e.target.value, url);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    validateForm(selectedMetric, cluster, serviceName, transactionName, e.target.value);
  };

  const validateForm = (metric, clusterVal, serviceVal, transactionVal, urlVal) => {
    if (metric && clusterVal) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Redirect to different pages based on selectedMetric
      switch (selectedMetric) {
        case 'Apm':
          navigate('/Apm');
          break;
        case 'Logsfile':
          navigate('/Logsfile');
          break;
        case 'Infra':
          navigate('/infra');
          break;
        case 'Ticket':
          navigate('/ticket');
          break;
        default:
          navigate('/submitted');
      }
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h1>SRE Tool</h1>
        <ul>
          <li>
            <label htmlFor="metric">Metrics</label>
            <select id="metric" value={selectedMetric} onChange={handleMetricChange}>
              <option value="">Select Metric</option>
              <option value="Apm">APM</option>
              <option value="Logsfile">Logs</option>
              <option value="Infra">Infra</option>
              <option value="Ticket">Ticket</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Cluster Name</label>
            <select value={cluster} onChange={handleClusterChange}>
              <option value="">Select Cluster</option>
              <option value="Cluster1">Cluster1</option>
              <option value="Cluster2">Cluster2</option>
              <option value="Cluster3">Cluster3</option>
            </select>
          </div>

          <div className="input-group">
            <label>Service Name</label>
            <select value={serviceName} onChange={handleServiceNameChange}>
              <option value="">Select Service</option>
              <option value="Service1">Service1</option>
              <option value="Service2">Service2</option>
            </select>
          </div>

          {(selectedMetric === 'Apm' || selectedMetric === 'Logsfile') && (
            <>
              <div className="input-group">
                <label>Transaction Name</label>
                <input
                  type="text"
                  value={transactionName}
                  onChange={handleTransactionNameChange}
                  placeholder="Enter Transaction Name"
                />
              </div>

              <div className="input-group">
                <label>URL</label>
                <input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="Enter URL"
                />
              </div>
            </>
          )}

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
