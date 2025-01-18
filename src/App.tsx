import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/signup" element={<div className="dark bg-black"><Signup /></div>} />
        <Route path="/auth/login" element={<div className="dark bg-black"><Signin/></div>}/>
        <Route path="/auth/forget-password" element={<div className="dark bg-black"><ForgetPassword/></div>}/>
      </Routes>
    </>
  );
}

export default App;
