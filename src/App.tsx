import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import { useEffect } from "react";
import Sidebar from "./pages/Sidebar";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Signin />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
      </Routes>
      <Routes>
        <Route path="/docs/sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
