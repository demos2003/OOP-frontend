import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Landing from './Views/Landing';
import Signup from './Views/Signup';
import AdminLogin from './Views/AdminLogin';
import PatientData from './Views/PatientData';
import Admin from './Views/Admin';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
   <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/patientdata" element={<PatientData/>}/>
          <Route path="/admin" element={<Admin/>}/>
   </Routes>
        </BrowserRouter>
   
    </div>
  );
}


export default App;
