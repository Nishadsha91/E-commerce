import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Registration() {

    const [inputname,setInputname] = useState('')
    const [inputemail,setInputEmail] = useState('')
    const [inputphone,setInputPhone] = useState('')
    const [inputpassword,setInputPassword] = useState('')
    const navigate= useNavigate()

    const Click = async (e)=>{
        e.preventDefault();

    const newUser = {
      name: inputname,
      email: inputemail,
      phone: inputphone,
      password: inputpassword
    }

    try {
      await axios.post('http://localhost:3000/user', newUser)
      alert('Registration successful!')
      navigate('/login')

    } catch (error) {
      console.error('Error:', error)
      alert('Failed to register user')
    }
  }



  return (
    <>
    <div  className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#8e88ff] to-[#48C9B0] font-[Segoe UI]">
    <form onSubmit={Click} className="bg-white p-10 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full max-w-md">
    <h1 className="text-center text-[#333] mb-6 text-xl font-semibold">Sign Up</h1><br />
    FullName :
    <input type="text" value={inputname}  placeholder='Enter your name...'  onChange={(e)=> setInputname(e.target.value)} required 
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"/><br />
    Email:
    <input type="email" value={inputemail} placeholder='Enter your email...' onChange={(e)=> setInputEmail(e.target.value)} required
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"/><br />
    Phone:
    <input type="text" value={inputphone} placeholder='Enter your number...' onChange={(e)=> setInputPhone(e.target.value)} required
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"/><br />
    Password:
    <input type="password" value={inputpassword} placeholder='Create a Password...' onChange={(e)=> setInputPassword(e.target.value)} required
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors" /><br />
    
    <button type='submit'  className="w-full py-3 bg-[#6C63FF] text-white text-base rounded-lg hover:bg-[#574fd6] transition-colors" >Sign Up</button>
    </form>
    </div>
    </>
    
  )
}

export default Registration