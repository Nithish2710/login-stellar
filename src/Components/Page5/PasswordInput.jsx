import React from "react";

const PasswordInput = ({ label, placeholder }) => {
  return (
    <div className="mb-8 w-full">
      <label className="mb-2.5 text-xl text-blue-950 max-sm:text-xl">
        {label}
      </label>
      <div className="w-full">
        <input
          type="password"
          placeholder={placeholder}
          className="px-5 py-0 w-10px text-xl rounded-xl border border-solid bg-zinc-300 bg-opacity-10 border-zinc-300 border-opacity-80 h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-blue-950 max-sm:text-lg m-[3px]"
          aria-label={label}
        />
      </div>
    </div>
  );
};

export default PasswordInput;