import React, { useState } from "react";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import batb from "../../assets/img/batb.jpg";
import { useLogin } from "../../services/LoginUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleAuth } from "../../services/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/authLogin";
import { setToken } from "../../redux/reducers/auth/authLoginSlicer";

export const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.auth);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const shwpswd = () => {
    setShowPassword(!ShowPassword);
  };

  // const { mutate: postLogin, data: errMsg, status } = useLogin();

  const handleSubmit = () => {
    dispatch(
      loginUser({
        email: Email,
        password: Password,
      })
    );
  };

  const { mutate: postGoogle } = useGoogleAuth();

  const handleGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      postGoogle({
        access_token: credentialResponse.access_token,
      });
      dispatch(setToken(credentialResponse.access_token));
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // useEffect(() => {
  //   if (errMsg) {
  //     toast.error(errMsg, {
  //       position: "top-right",
  //       autoClose: 3500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // }, [status === "success"]);

  const getToken = CookieStorage.get(CookiesKeys.RegisterToken);
  useEffect(() => {
    if (getToken) {
      toast.success("Register Berhasil, Silahkan Login!", {
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

    setTimeout(() => {
      CookieStorage.remove(CookiesKeys.RegisterToken);
    }, 3600);
  }, [getToken]);

  return (
    <div className="flex bg-slate-700 items-center justify-center min-h-screen text-slate-200">
      <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="flex h-[35rem] w-[50rem] rounded-xl overflow-hidden shadow-2xl">
        <div className="w-1/3">
          <img src={batb} alt="poster" className="object-cover h-full" />
        </div>
        <div className="flex flex-col bg-slate-800 w-2/3 p-10 gap-4">
          <div className="flex flex-col gap-2 mb-2">
            <div className="text-2xl font-semibold">Welcome back</div>
            <div>Sign in to your account</div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Email</span>
            <input
              onChange={handleInput}
              id="email"
              className="text-slate-200 px-3 py-2 bg-slate-800 ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-red-600"
              placeholder="You@Example.com"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Password</span>
            <div className="relative flex items-center">
              <input
                onChange={handleInput}
                id="password"
                className="text-slate-200 px-3 py-2 bg-slate-800 ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-red-600 w-full"
                placeholder="Password here..."
                type={ShowPassword ? "text" : "password"}
              />
              <div className="absolute cursor-pointer right-2" onClick={shwpswd}>
                {ShowPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm text-end cursor-pointer">
              <div>Forgot Password?</div>
            </span>
            <button onClick={handleSubmit} className="w-full bg-red-600 hover:bg-red-800 rounded p-[8px]">
              Sign In
            </button>
            <span className="flex gap-2">
              Don't have an account?{" "}
              <a href="/register" className="text-red-600 hover:text-red-800 font-semibold">
                Sign Up
              </a>
            </span>
            <div className="flex items-center gap-4">
              <hr className="w-full bg-white" />
              <div>OR</div>
              <hr className="w-full bg-white" />
            </div>
            <div className="flex flex-row gap-5 items-center justify-center">
              <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-slate-900 border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                <div onClick={() => handleGoogle()}>
                  <img className="w-[20px] h-[20px]" src={google} alt="google" />
                </div>
              </div>
              <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-slate-900 border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                <div>
                  <img className="w-[28px] h-[28px]" src={facebook} alt="facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
