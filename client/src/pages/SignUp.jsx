import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error,  setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
        
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/signin');
      console.log(data);
      
    } catch (error) {
      setLoading(false);
      setError(data.message);
      
    } 
  };

  // console.log(formData);
  return (
    <div className='bg-gradient-to-r from-gray-100 to-orange-300  p-3 max-w-lg mx-auto mt-10' >
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="text" className="border p-2 rounded-lg" 
          placeholder='Username' id='username' onChange={handleChange}/>
        <input type="email" className="border p-2 rounded-lg" 
          placeholder='email' id='email' onChange={handleChange}/>
        <input type="password" className="border p-2 rounded-lg" 
          placeholder='password' id='password' onChange={handleChange}/>
        <button disabled={loading} className="bg-gradient-to-r from-gray-400 to-cyan-700  text-white p-2 
        rounded-lg uppercase hover:opacity-95 
        disable:opacity-80 "> {loading ? 'Loading...' : 'Signup'} </button>
        <OAuth/> 
          
      </form>  
            <div className="flex gap-2 mt-5">
        <p className="">Have an account</p>
        <Link to={"/signin"} >
         <span className="text-blue-700">Sign In</span> 
        </Link>
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
} 
