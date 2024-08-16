"use client"
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://diatomicsoft-backend-api.vercel.app/api/login', {
        email,
        password,
      }, {
        withCredentials: true,
      });

      if (response.data.message === 'User logged in successfully') {
        router.push("/admin")
        console.log("Login Successfully...!");
        
      } else {
        setError('Authentication failed');
      }
    } catch (err) {
      setError('Error: Could not log in');
    }
  };

  return (
    <div >
      <h1 className="text-3xl font-bold text-center pb-20">Welcome to Diatomic Soft</h1>
      <div className="w-[600px] h-[300px]">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="p-2 border rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
