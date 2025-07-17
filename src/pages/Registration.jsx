import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function Registration() {
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: ''
    
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(5, 'At least 5 characters').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Must be 10 digits').required('Required'),
    password: Yup.string().min(4, 'At least 4 characters').required('Required')
  })

  const onSubmit = async (values, { setSubmitting, setFieldError, resetForm }) => {
    try {
      // Check if email already exists
      const res = await axios.get(`http://localhost:3000/users?email=${values.email}`)
      if (res.data.length > 0) {
        setFieldError('email', 'Email already registered')
        return
      }

      // Add role: 'user' before sending to backend
      const newUser = { ...values, role: 'user' }

     await axios.post('http://localhost:3000/users', newUser)
        alert('Registration successful!')
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(newUser));
 

      resetForm()
      navigate('/login')

    } catch (error) {
      console.error('Registration failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center min-h-screen bg-gradient-to-br from-[#8e88ff] to-[#48C9B0] font-[Segoe UI]">
      <div className="bg-white p-10 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full max-w-md">
        <h1 className="text-center text-[#333] mb-6 text-2xl font-semibold">Sign Up</h1>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                FullName :
                <Field
                  name="name"
                  placeholder="Full name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                Email :
                <Field
                  type="email"
                  name="email"
                  placeholder="Email..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                Phone :
                <Field
                  name="phone"
                  placeholder="Phone number..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                Password :
                <Field
                  type="password"
                  name="password"
                  placeholder="Create password..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#6C63FF] text-white text-base rounded-lg hover:bg-[#574fd6] transition-colors"
              >
                {isSubmitting ? 'Registering...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Registration
