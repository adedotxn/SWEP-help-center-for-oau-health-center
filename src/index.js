import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import Student from './Components/Student/student';
import StudentLogin from './Components/Student/loginpage';
import StudentHome from './Components/Student/Home/home';
import Questions from './Components/Student/Home/questions';
import PositiveFeedback from './Components/Student/Home/positive_feedback';
import Prescription from './Components/Student/Home/prescription';
import StudentAppointment from './Components/Student/Appointment/appointment';
import StudentMessages from './Components/Student/Message/message';
import MobileStudentChat from './Components/Student/Message/mobile_chat';
import Staff from './Components/Staff/staff';
import StaffLogin from './Components/Staff/loginpage';
import Dashboard from './Components/Staff/Dashboard/dashboard';
import StaffAppointment from './Components/Staff/Appointment/appointment';
import StaffMessages from './Components/Staff/Messages/messages';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/"  element={<App />} />
          <Route path="student" element={<Student/>}>
            <Route path="login" element={<StudentLogin/>}/>
            
          </Route>
      
          <Route path="home" element={<StudentHome/>}/>
          <Route path="questions" element={<Questions/>} />
          <Route path="positive-feedback" element={<PositiveFeedback/>} />
          <Route path="prescription" element={<Prescription/>} />
          <Route path="appointment" element={<StudentAppointment/>} />
          <Route path="messages" element={<StudentMessages/>} />
          <Route path="mobile_chat" element={<MobileStudentChat/>} />
          
          <Route path="staff" element={<Staff/>}>
            <Route path="login" element={<StaffLogin/>} />
          </Route>

          <Route path="dashboard" element = {<Dashboard/>} />
          <Route path="staff_appointment" element={<StaffAppointment/>} />
          <Route path="staff_messages" element={<StaffMessages/>} />
          {/* <Route path="staff_reshedule" */}
      </Routes>
      <Outlet/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
