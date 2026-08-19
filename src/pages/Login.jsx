 import Logo from '../components/logo'
import Input from '../components/Input'
import Logologin from "../assets/logoLogin.png"
import { useState } from 'react'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom'
const Login = () => {
  const [form,setForm]=useState({email:"",password:""})
   const navigate=useNavigate()
  return (
    <div className='login'>
      <div className='flex flex-col items-center p-8  bg-white/5 backdrop-blur-sm rounded-2xl text-[#edebeb]'>
        <Logo textSize="text-3xl" logo={Logologin} textColor="#7FAD51" />
        <div className='w-full mt-2'>
          <form action="" className='flex flex-col items-center' onSubmit={e=>
            {
              e.preventDefault();
              setForm({email:e.target.elements.email.value,password:e.target.elements.password.value}) 
              navigate("/Home")             
            }
          }>
            <div className='w-full'><label className='text-[18px]'>Email</label><Input placeholder={"Email/Username"} type={"email"} name="email" /></div>
            <div><label className='text-[18px]'>Password</label><Input placeholder={"Password"} type={"password"} name="password" /></div>
            <button className="bg-[#0D3026] text-white font-inter font-semibold text-base rounded-[8px] py-2 w-[80%]">Login</button>
          </form>
        </div>
        <p className='mt-2'>Dont have an account? <span>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login