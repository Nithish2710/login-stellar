"use client";
import React from "react";
import PasswordInput from "./PasswordInput";
import BackgroundImage from "./BackgroundImage";
import Logo from "./Logo";

const PasswordReset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <main className="flex relative justify-center items-center min-h-screen">
      <BackgroundImage />
      <section className="flex relative justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start p-1 bg-white rounded-3xl border border-white border-solid w-[404px] max-md:p-8 max-md:max-w-[300px] max-md:w-[80%] max-sm:p-5"
        >
          <h1 className="mb-3 text-xl font-bold text-blue-950 text-l pl-3 pt-3">
            Create New Password
          </h1>
          <p className="mb-5 text-l p-2">
            Create, your new password must be different from any of your
            previous passwords.
          </p>

          <PasswordInput label="New Password" placeholder="Enter Password" />

          <PasswordInput
            label="Confirm Password"
            placeholder="Re - enter Password"
          />

          <button
            type="submit"
            className="self-center mt-5 text-l mt-[-9px] font-bold text-white rounded-xl cursor-pointer bg-blue-950 border-[none] h-[40px] w-[150px] max-md:w-full max-sm:h-12 max-sm:text-xl"
            aria-label="Reset Password"
          >
            Reset Password
          </button>
          <br />
        </form>
        <Logo />
      </section>
    </main>
  );
};

export default PasswordReset;
