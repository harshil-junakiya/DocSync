import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import AllAppointments from './pages/admin/AllAppointments';
import AddDoctor from './pages/admin/AddDoctor';
import DoctorsList from './pages/admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';


const App = () => {

  const { aToken } = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <SideBar /> 
        <Routes>

           <Route path='/' element={<></>} />
           <Route path='/admin-dashboard' element={<Dashboard />} />
           <Route path='/all-appointments' element={<AllAppointments />} />
           <Route path='/add-doctor' element={<AddDoctor />} />
           <Route path='/doctor-list' element={<DoctorsList />} />


           <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
           <Route path='/doctor-appointments' element={<DoctorAppointments />} />
           <Route path='/doctor-profile' element={<DoctorProfile />} />

        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
