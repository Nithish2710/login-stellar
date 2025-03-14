import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import InputField from "./InputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // To prevent double login
  const [isMounted, setIsMounted] = useState(true); // Track mount state

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (isMounted) {
        console.log("Logged in:", userCredential);
        localStorage.setItem("emailData", formData.email);
        navigate("/phone");
      }
    } catch (error) {
      if (isMounted) {
        console.error("Login Error:", error.message);
        alert("Invalid email or password");
      }
    } finally {
      if (isMounted) setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 rounded-3xl border border-white bg-zinc-100 h-[400px] w-[500px] max-md:p-5 max-md:w-full max-md:h-auto"
    >
      <div className="flex flex-col gap-4 items-center">
        <InputField
          type="email"
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          label="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-10 text-m font-bold text-white rounded-xl cursor-pointer bg-blue-950 border-[none] h-[30px] w-[100px] max-md:w-full max-sm:text-2xl max-sm:h-[50px] ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button> <Link to="/signup"><span style={{color:"black"}}>Sign-up</span></Link>
      </div>
    </form>
  );
};

export default LoginForm;
