import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DatePickerPage from './pages/DatePickerPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pick-date" element={<DatePickerPage />} />
          <Route path="/confirm" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;