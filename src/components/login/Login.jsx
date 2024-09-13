"use client"
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice'
import { toast } from 'react-toastify';


const Login = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const [fieldErrors, setFieldErrors] = useState({ email: '', password: '' });


  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      router.push('/admin');
      toast.success("Login Successfully!");
    } else if (loginUser.rejected.match(result)) {
      if (error) {
        const errorMessage = error.message || "An error occurred during login.";
        toast.error(errorMessage);
      }



      // Check for specific field errors from the server response
      if (result.payload && result.payload.errors) {
        setFieldErrors({
          email: result.payload.errors.email ? result.payload.errors.email[0] : '',
          password: result.payload.errors.password ? result.payload.errors.password[0] : '',
        });
      } else {
        // Reset errors if no field-specific errors are present
        setFieldErrors({ email: '', password: '' });
      }
    }
  };


  return (
    <>

      <div className="flex items-center justify-center w-full" style={{ height: `calc(100vh - 76px)` }}>
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
                  className="p-2 border !bg-gray-700 rounded outline-none border-none "
                // required
                />
                {fieldErrors.email && <p className="text-red-500">{fieldErrors.email}</p>}
              </div>

              <div className="flex flex-col w-full gap-1 pb-1">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-2 border bg-gray-700 rounded outline-none border-none"
                // required
                />
                {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
              </div>

              <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {loading ? 'Logging in...' : 'Login'}
              </button>
              {/* {error && <p>{error}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;
