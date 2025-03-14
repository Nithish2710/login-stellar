"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm=()=> {
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[450px] max-md:w-[40%] max-sm:w-[75%] p-3">
      <div className="p-8 rounded-2xl border border-white border-solid bg-zinc-100 max-md:p-4 max-sm:p-2">
        <div className="text-center">
          <h1 className="mb-6 text-xl font-bold text-blue-950 mt-2 mb-3">
            <u>Forgot Password</u>
          </h1>
          <p className="mb-4 p-2 text-m tracking-wide leading-6 text-blue-950 p-[20px]">
            Enter the email address you used to create the account, and we will
            email you the instruction reset your password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-[-10px]">
              <label
                htmlFor="email"
                className="block mb-2 text-xl text-blue-950"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-[0px_4px_4px_rgba(0,0,0,.25)] px-4  text-xl rounded-xl border border-solid shadow-sm bg-zinc-300 bg-opacity-20  border-zinc-300 border-opacity-80 h-[35px] text-blue-950"
                  required
                  aria-label="Email address"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 mb-8 text-l font-bold text-white rounded-xl bg-blue-950 h-[30px] w-[100px] max-md:w-full hover:bg-blue-900 transition-colors mt-[2px]"
              aria-label="Send email for password reset"
            >
              Send
            </button>
          </form>
          <div className="flex gap-2 justify-center items-center mt-[-15px]">
            <p className="text-l text-blue-950">Remember Password?</p>
        <a href="#" className="text-xl font-bold text-blue-950 hover:underline " onClick={handleClick}>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswordForm;
