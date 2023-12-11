import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
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
      const res = await fetch('/api/auth/signin', {
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
      navigate('/');
      console.log(data);
      
    } catch (error) {
      setLoading(false);
      setError(data.message);
      
    } 
  };

  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="email" className="border p-2 rounded-lg" 
          placeholder='email' id='email' onChange={handleChange}/>
        <input type="password" className="border p-2 rounded-lg" 
          placeholder='password' id='password' onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-2 
        rounded-lg uppercase hover:opacity-95 
        disable:opacity-80 "> {loading ? 'Loading...' : 'Signup'} </button>
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
