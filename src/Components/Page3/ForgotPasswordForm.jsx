// "use client";
// import React from "react";
// import Input from "./Input";
// import Button from "./Button";
// import { useNavigate } from "react-router-dom";


 
// const ForgotPasswordForm = () => { 
//   const navigate = useNavigate();
//    const HandleCLick = () => {
//     navigate("/");
//   };
//   return (
//     <section className="flex justify-center items-center rounded-3xl border border-white border-solid bg-zinc-100 h-[400px] w-[400px] max-md:px-0 max-md:py-10 max-md:h-auto max-md:max-w-[562px] max-md:w-[90%] max-sm:px-0 max-sm:py-8 max-sm:w-[95%]">
//       <div className="flex flex-col items-center w-4/5 max-sm:w-[90%]">
//         <h1 className="mb-6 text-xl font-bold text-blue-950 max-sm:text-2xl pt-3">
//           <u>Forgot Password</u>
//         </h1>
//         <p className="mb-10 text-base tracking-wide leading-6 text-center text-blue-950 max-sm:text-sm">
//           Enter the mobile number you used to create the account, and we will
//           send the OTP to reset your password
//         </p>
//         <div className="mb-5 w-40px">
//           <Input label="" placeholder="Enter Mobile Number" />
//         </div>
//         <div><Button className="mb-3">Send SMS</Button></div>
//         <div className="flex gap-4 items-center max-sm:flex-col max-sm:gap-2.5 max-sm:text-center">
//           <p className="text-l text-blue-950">Remember Password ?</p>
//           <button className="text-xl font-bold cursor-pointer text-blue-950" onClick={HandleCLick}>
//             Login
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ForgotPasswordForm;



import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/bfdc938306a7fb15bb42f40e4fa2ce3ec6511a23')",
      }}
    >
      {/* Glassmorphism Effect Container */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-lg w-[400px] border border-white border-opacity-30">
        <h1 className="text-4xl font-bold text-white drop-shadow-md">
          Welcome to <span className="text-blue-300">DocVault</span> 🚀
        </h1>
        <p className="mt-3 text-lg text-gray-200">
          Your Secure Cloud for Document Storage & Management.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/signin")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 ease-in-out shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
