import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const SignIn = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const signIn = async (e) => {
e.preventDefault();
try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredential);

    localStorage.setItem("emailData", email);
    
    navigate("/loginsuccess");
} catch (error) {
    console.log("Login Error:", error.message);
    alert("Invalid email or password");
}
};

return (
<div
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{
    backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/bfdc938306a7fb15bb42f40e4fa2ce3ec6511a23")`,
    }}
>
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 text-center border border-white border-opacity-30">
    <h1 className="text-3xl font-bold text-white mb-6">Log In to your Account</h1>
    <form onSubmit={signIn} className="flex flex-col gap-4">
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
        <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
        <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out shadow-md"
        >
        Log In
        </button> <Link to="/signup"><span style={{color:"white"}}>Sign-up</span></Link>
    </form>
    </div>
</div>
);
};

export default SignIn;