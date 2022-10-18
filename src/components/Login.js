import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const admin="hari"
  const adminpassword="12345"
  const history = useNavigate()
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  function handleSubmit(){
    if(username=== admin && password === adminpassword ){
      console.log("hari");
      history("/home");
      
    }
    else{
      console.log("not");
    }
  }
  return (
    <div className="container mx-auto">
      <div className="grid h-screen place-items-center">
        <div className="bg-gray-50 shadow-lg border border-slate-200 rounded max-w-sm p-4">
          <h1 className="text-4xl font-semibold mb-5">Login</h1>

          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-2 mb-2 border border-slate-400 rounded"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full p-2 mb-3 border border-slate-400 rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white font-medium px-3 py-2 mt-5 w-full bg-indigo-500 hover:bg-indigo-600 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
