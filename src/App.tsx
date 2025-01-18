import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/signup" element={<div className="dark bg-black"><Signup /></div>} />
      </Routes>
    </>
  );
}

export default App;
