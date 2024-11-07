import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { ThemeProvider } from "./pages/contexts/ThemeContext.js";
import { AuthProvider } from "./pages/contexts/AuthContext.js";
import { LangProvider } from "./pages/contexts/langContext.js";

function App() {
  return (
    <LangProvider>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </LangProvider>
  );
  // <Home />;
}

export default App;
