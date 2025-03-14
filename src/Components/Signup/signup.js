// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../firebase/firebase";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/bfdc938306a7fb15bb42f40e4fa2ce3ec6511a23")`,
//       }}
//     >
//         <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/9006af2f5ea7027c43e1b13eae717b94adb12287"
//         alt="Logo"
//         className="absolute top-20 right-0 w-[400px] h-[154px] max-lg:w-[200px] max-sm:w-[200px]"
//       />
      
//       <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 text-center border border-white border-opacity-30">
//         <h1 className="text-3xl font-bold text-white mb-6">Create Account</h1>
//         <form onSubmit={signUp} className="flex flex-col gap-4" >
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out shadow-md"
//           >
//             Sign Up
//           </button> <Link to="/"> <span style={{color:"white", }} > Login</span></Link>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default SignUp;
//perfect code


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const newPassword = Math.random().toString(36).slice(-8);
    setPassword(newPassword);
    setGeneratedPassword(newPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const finalPassword = password || generatedPassword;
    if (!email || !finalPassword) {
      alert("Please enter an email and password.");
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    const users = new Map(storedUsers.map(user => [user.email, user.password]));

    if (users.has(email)) {
      alert("Email already exists! Try logging in.");
      return;
    }

    users.set(email, finalPassword);
    const updatedUsers = Array.from(users, ([email, password]) => ({ email, password }));

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("emailData", email);
    localStorage.setItem("passwordData", finalPassword);

    alert(`Signup successful! Your password: ${finalPassword}`);

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border rounded-md"
          />
          
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-md"
          />
          
          <button
            type="button"
            onClick={generatePassword}
            className="bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
          >
            Generate Password
          </button>

          {generatedPassword && (
            <p className="text-green-600 text-center">
              Your generated password: <b>{generatedPassword}</b>
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
