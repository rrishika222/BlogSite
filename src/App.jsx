
import { useState,useEffect} from 'react';
import authService from './appwrite/auth';
import {useDispatch} from 'react-redux'
import './App.css'
import {login,logout} from './store/authSlice';
import { Outlet } from 'react-router-dom';
import { Header } from './components';
import {Footer} from './components';
function App() {
  const [loading,setLoading] =useState(true)
  const dispatch=useDispatch()
  useEffect(() => {
   authService.getCurrentUser()
   .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
   })
   .finally(()=>setLoading(false))
  }, [])
  

 
 
  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-blue-200'>
      <div className='w-full block'>
        <Header />
        <main>
           <Outlet />
        </main>
        </div>
    </div>
  ):null
}

export default App
