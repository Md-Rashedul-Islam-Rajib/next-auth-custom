"use client"
import axios from "axios";
import React from "react";

const SignUp = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    // const form = event.target as HTMLFormElement;
    if(!user.name || !user.email || !user.password){
        console.log('no info')
    }
    const data = await axios.post("/api/sign-up", {user});
    console.log(data.data)
  };
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="leroy jenkins"
                onChange={(e)=> setUser({...user, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                onChange={(e)=>setUser({...user, email:e.target.value})}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                onChange={(e)=>setUser({...user, password: e.target.value})}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have account?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Sign In
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
