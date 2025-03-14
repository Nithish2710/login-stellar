import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({ email: "", password: "" });

const handleInputChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleLogin = (e) => {
e.preventDefault();

let users = JSON.parse(localStorage.getItem("users")) || [];

const validUser = users.find(
    (user) =>
    user.email === formData.email && user.password === formData.password
);

if (validUser) {
    localStorage.setItem("emailData", formData.email);
    localStorage.setItem("passwordData", formData.password);
    navigate("/phone");
} else {
    alert("Invalid email or password!");
}
};

return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="p-3 border rounded-md"
        />
        <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
        required
        className="p-3 border rounded-md"
        />
        <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
        Login
        </button>
    </form>
    </div>
</div>
);
};

export default Login;
