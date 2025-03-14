"use client";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import Logo from "./Logo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex overflow-hidden relative justify-end items-center min-h-screen ">
      <BackgroundImage />
      <section className="flex flex-col items-center rounded-3xl border border-solid bg-zinc-100 bg-opacity-80 border-white border-opacity-30 w-[35%] min-w-[400px] shadow-lg ml-auto mr-20">
        <Logo />
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
