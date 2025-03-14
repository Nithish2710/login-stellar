import React from "react";

const InputField = ({ type, label, value, onChange, id, name }) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <label htmlFor={id} className="mb-2.5 text-xl text-blue-950 max-sm:text-lg">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        autoComplete={type === "password" ? "current-password" : "email"}
        className="rounded-xl border border-solid bg-zinc-300 bg-opacity-50 border-zinc-300 border-opacity-80 h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[400px] max-md:w-full"
      />
    </div>
  );
};

export default InputField;
