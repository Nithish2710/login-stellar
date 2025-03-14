import './App.css';
import LoginPage from './Components/Page1/LoginPage';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Components/Page2/ForgotPassword"; // Create this component
import ForgotPassword1 from "./Components/Page3/ForgotPassword"; // Create this component
import EmailSent from "./Components/Page4/EmailConfirmationPage"
import PasswordReset from './Components/Page5/PasswordReset';
import Loginsuccesss from './Components/Login/Loginsuccess';
import SignUp from './Components/Signup/signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/phone" element={<ForgotPassword1/>} />
        <Route path="/email" element={<EmailSent/>} />
        <Route path="/passwordreset" element={<PasswordReset/>} />
        <Route path="/loginsuccess" element={<Loginsuccesss/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;