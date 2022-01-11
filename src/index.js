import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import StudentLogin from './Components/Student/loginpage';
import StudentHome from './Components/Student/Home/home';
import Questions from './Components/Student/Home/questions';
import StudentAppointment from './Components/Student/Appointment/appointment';
import StudentMessages from './Components/Student/Message/message';
import MobileStudentChat from './Components/Student/Message/mobile_chat';
import Dashboard from './Components/Staff/Dashboard/dashboard';
import StaffAppointment from './Components/Staff/Appointment/appointment';
import StaffMessages from './Components/Staff/Messages/messages';
import StaffLogin from './Components/Staff/loginpage';
import StaffSchedule from './Components/Staff/Appointment/schedule';
import Verifylogin from './Components/Student/verifylogin';
import ProtectedRoute from './Components/ProtectedRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="student">
            <Route path="chat" element={
              <ProtectedRoute>
                <MobileStudentChat/>
              </ProtectedRoute>
              } 
            />
            <Route path="messages" element={
              <ProtectedRoute>
                <StudentMessages/>
              </ProtectedRoute>
              } 
            />
            <Route path="appointment" element={
              <ProtectedRoute>
                <StudentAppointment/>
              </ProtectedRoute>
              }
            />
            <Route path="survey/:id" element={ 
               <ProtectedRoute>
                 <Questions/>
               </ProtectedRoute>
              } 
            />
            <Route path="dashboard" element={ 
              <ProtectedRoute>
                <StudentHome/>
              </ProtectedRoute> 
              } 
            />
            <Route path="verify/:token" element={<Verifylogin />} />
            <Route index element={<StudentLogin/>} />
          </Route>
          <Route path="staff">
            <Route path="messages" element={<StaffMessages/>} />
            <Route path="reschedule" element={<StaffSchedule/>}/>
            <Route path="appointment" element={<StaffAppointment/>} />
            <Route path="dashboard" element = {<Dashboard/>} />
            <Route index element={<StaffLogin/>} />
          </Route>
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
