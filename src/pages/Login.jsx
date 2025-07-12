import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [logEmail , setLogEmail] =useState('')
  const [logPass, setLogPass] = useState('')
  const navigate = useNavigate()

  const Log =async (e)=>{
    e.preventDefault();
    try {

      const res = await axios.get(`http://localhost:3000/user?email=${logEmail}`)
      if (res.data.length > 0) 
        {
        const user = res.data[0]
          if (user.password === logPass) 
          {
          localStorage.setItem('currentUser', JSON.stringify(user))
          alert('Login successful!')
          navigate('/home')
          } else {
          alert('Invalid password')
          }
      } else {
        alert('No user found with this Username')
      }


    } catch (error) {
      console.error('Error:', error)
      alert('Login failed. Try again.')
    }
  }

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#a78bfa] to-[#34d399] font-[Segoe UI]">
      <form onSubmit={Log} className="bg-white p-10 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full max-w-md">
      <h1 className="text-center text-[#333] mb-6 text-2xl font-semibold">Login</h1>
        
        <input
          type='email'
          placeholder='Enter your email..'
          value={logEmail}
          onChange={(e) => setLogEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
          required
        />
        
        <input
          type='password'
          placeholder='Enter your password..'
          value={logPass}
          onChange={(e) => setLogPass(e.target.value)}
           className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
          required
        />

        <button type='submit'  className="w-full py-3 bg-[#6C63FF] text-white text-base rounded-lg hover:bg-[#574fd6] transition-colors">Login</button>
      </form>
    </div>

    </>
  )
}

export default Login