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
        document.cookie = "uidToken=" + response.data.data.token + "; path=/; Secure; SameSite=None";
        router.push("/admin")
      console.log("Login Successfully...!");
        
      } else {
        setError('Authentication failed');
      }
    } catch (err) {
      setError('Server Error: Could not log in');
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-slate-200" style={{ height: `calc(100vh - 76px)` }}>
  <div className="flex flex-col items-center justify-center w-full h-full">
    <h1 className="text-xl md:text-3xl font-bold text-center pb-20">Welcome to Diatomic Soft</h1>
    <div className="w-[90%] max-w-[600px] px-2">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col w-full gap-1">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded"
            required
          />
        </div>

        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
