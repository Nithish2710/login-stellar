"use client";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import Logo from "./Logo";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <main className="flex relative justify-center items-center mx-auto w-full max-w-none min-h-screen max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <BackgroundImage />
      <Logo />
      <ForgotPasswordForm />
    </main>
  );
};

export default ForgotPassword;