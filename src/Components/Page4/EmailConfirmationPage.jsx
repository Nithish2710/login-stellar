"use client";
import React from "react";
import ConfirmationCard from "./ConfirmationCard";

const EmailConfirmationPage = () => {
  return (
    <main className="font-bold">
      <div className="overflow-hidden w-full bg-white max-md:max-w-full">
        <div className="flex relative flex-col pb-60 pl-20 w-full min-h-[700px] max-md:pb-2 max-md:pl-5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4586c0135e4bb21ed6af4895304380462251c4d3f01f2dad33c76b5acfb06871?placeholderIfAbsent=true"
            alt="Background pattern"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69fb1bf6a5a0754fa53b61defb8dabfd72031c8c2639e0cf2810d53e248d70fa?placeholderIfAbsent=true"
            alt="Logo"
            className="object-contain self-end max-w-full aspect-[2.02] w-[308px]"
          />
          <ConfirmationCard />
        </div>
      </div>
    </main>
  );
};

export default EmailConfirmationPage;
