import React from "react";

const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <label className="mb-2 text-2xl text-blue-950">{label}</label>
      <div className="w-full rounded-xl border border-solid bg-zinc-300 bg-opacity-50 border-zinc-300 border-opacity-80 h-[43px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <input
          type={type}
          placeholder={placeholder}
          className="px-4 py-0 text-xl border-[none] size-full text-blue-950 text-opacity-30"
        />
      </div>
    </div>
  );
};

export default Input;
