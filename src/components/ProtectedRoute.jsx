import React from 'react'
import { User } from '../Context/UserContext.jsx'
import { Navigate, Outlet } from 'react-router-dom';
import LoadingScreen from './LoadingScreen.jsx';
const ProtectedRoute = () => {
  
  const { user , loadingScreen} = User();
  if(loadingScreen){
    return <LoadingScreen/>
  }
  if(!user){
   return <Navigate to={"/"} replace/>
  }
   return  <Outlet/>
}

export default ProtectedRoute