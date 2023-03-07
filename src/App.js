import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./pages/feed/feed.page";
import Forgot from "./pages/forgot/forgot.page";
import Login from "./pages/login/login.page";
import Reset from "./pages/reset/reset.page";
import Signup from "./pages/signup/signup.page";
import Verification from "./pages/verification/verification.page";
import RegistrationEnded from './component/register-student/over/registration-ended.component';
import RegisterStudent from './component/register-student/register/register.component';
import HomePage from './pages/home_page/home-page.pages';
import StudenPage from './pages/student/student.page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="forgot" element={<Forgot />} />
          <Route path="verify" element={<Verification />} />
          <Route path="reset" element={<Reset />} />
          <Route path="feed" element={<Feed />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path='/register-student' element={<RegisterStudent />} />
          <Route path='/registration-ended' element={<RegistrationEnded />} />
          <Route path='/student-page' element={<StudenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
