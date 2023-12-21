import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  signInStart, 
  signInSuccess, 
  signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false) {
        dispatch(signInFailure(data.message));
        
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
      console.log(data);
      
    } catch (error) {
     dispatch(signInFailure(error.message));
    } 
  };

  // console.log(formData);
  return (
    <div className='bg-gradient-to-r from-gray-100 to-orange-300 p-3 max-w-lg mx-auto mt-10'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="email" className="border p-2 rounded-lg" 
          placeholder='email' id='email' onChange={handleChange}/>
        <input type="password" className="border p-2 rounded-lg" 
          placeholder='password' id='password' onChange={handleChange}/>
        <button disabled={loading} className="bg-gradient-to-r from-gray-400 to-green-700  text-white p-2 
        rounded-lg uppercase hover:opacity-95 
        disable:opacity-80 "> {loading ? 'Loading...' : 'Sign in '} </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="">Dont have an account</p>
        <Link to={"/signup"} >
         <span className="text-blue-700">Sign Up</span> 
        </Link>
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
} 
