import { useAuth } from "../contexts/AuthContext";
import "./login.css";
import { accounts } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useLanguage } from "../contexts/langContext";
import Options from "../../components/options/Options";
import DarkMode from "../../components/DarkMode/DarkMode";
import { useTheme } from "../contexts/ThemeContext";

export default function Login() {
  const [email, setEmail] = useState(accounts.email);
  const [password, setPassword] = useState(accounts.password);
  const { login, user } = useAuth();

  const navigate = useNavigate();
  const { theme } = useTheme();
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      login(email, password);
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={theme === "light" ? "login" : "login dark"}>
      <div className="mode">
        <DarkMode />
      </div>
      {user ? (
        <Link to={"/home"}></Link>
      ) : (
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Moosocial</h3>
            <span
              className={theme === "light" ? "loginDesc" : "loginDesc dark"}
            >
              Connect with friends and the world around you on Moosocial.
            </span>
          </div>
          <div className="loginRight">
            <form
              onSubmit={handleSubmit}
              className={theme === "light" ? "loginBox" : "loginBox dark"}
            >
              <input
                type="email"
                value={accounts.email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@example.com"
                className="loginInput"
              />
              <input
                className="loginInput"
                type="password"
                value={accounts.password}
                placeholder="*****"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="loginButton" type="submit">
                Login
              </button>
              <span className="loginForgot">Forgot Password</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
          <div className={language === "en" ? "logLangOpt" : "logArLangOpt"}>
            <Options />
          </div>
        </div>
      )}
    </div>
  );
}
