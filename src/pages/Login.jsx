
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axios.get(`http://localhost:3000/users?email=${values.email}`);
      if (res.data.length > 0) {
        const user = res.data[0];
        if (user.password === values.password) {
          login(user);  // updates context + localStorage
          if (user.role === 'admin') {
            alert('Admin login successful!');
            navigate('/admin/dashboard');
          } else {
            alert('Login successful!');
            navigate('/');
          }
        } else {
          setFieldError('password', 'Incorrect password');
        }
      } else {
        setFieldError('email', 'No account found with this email');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center min-h-screen bg-gradient-to-br from-[#a78bfa] to-[#34d399] font-[Segoe UI]">
      <div className="bg-white p-10 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full max-w-md">
        <h1 className="text-center text-[#333] mb-6 text-2xl font-semibold">Login</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#6C63FF] text-white text-base rounded-lg hover:bg-[#574fd6] transition-colors"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
