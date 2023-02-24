import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Forgot from "./pages/forgot/forgot.page";
import Login from "./pages/login/login.page";
import Reset from "./pages/reset/reset.page";
import Signup from "./pages/signup/signup.page";
import Verification from "./pages/verification/verification.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="verify" element={<Verification />} />
          <Route path="reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
