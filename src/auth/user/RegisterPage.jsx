import React, { useEffect, useState } from "react";
import batb from "../../assets/img/batb.jpg";
import { ToastContainer, toast } from "react-toastify";
import { useRegister } from "../../services/RegisterUser";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") setEmail(e.target.value);
      if (e.target.id === "username") setUsername(e.target.value);
      if (e.target.id === "password") setPassword(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate: postRegister, data: errMsg, status } = useRegister();

  const handleSubmit = () => {
    postRegister({
      email: email,
      name: username,
      password: password,
    });
  };

  useEffect(() => {
    if (errMsg) {
      toast.error(errMsg, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [status === "success"]);

  return (
    <div className="flex bg-slate-700 items-center justify-center min-h-screen text-slate-200">
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex h-[34rem] w-[50rem] rounded-xl overflow-hidden shadow-2xl">
        <div className="w-1/3">
          <img src={batb} alt="poster" className="object-cover h-full" />
        </div>
        <div className="flex flex-col bg-slate-800 w-2/3 p-10 gap-4">
          <div className="flex flex-col gap-2 mb-2">
            <div className="text-2xl font-semibold">
              Welcome fellas! Let's go register
            </div>
            <div>Sign up to your account</div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-200">Email</span>
            <input
              id="email"
              type="email"
              placeholder="Masukkan Email"
              className="text-slate-200 px-3 py-2 bg-slate-800 ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-200">Username</span>
            <input
              id="username"
              type="text"
              placeholder="Masukkan Username"
              className="text-slate-200 px-3 py-2 bg-slate-800 ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <span className="text-slate-200">Password</span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Password"
              className="text-slate-200 px-3 py-2 bg-slate-800 ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleInput}
            />
            <button
              className="absolute top-10 right-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <button onClick={handleSubmit} className="bg-red-600 text-slate-200 font-semibold px-3 py-2 w-full rounded-md mt-3 hover:bg-red-800">
            Sign Up
          </button>
          <div>
            <span className="text-slate-200">
              Have an account?{" "}
              <a
                href="/login"
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Sign In
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
