import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./pages/feed/feed.page";
import Forgot from "./pages/forgot/forgot.page";
import Login from "./pages/login/login.page";
import Reset from "./pages/reset/reset.page";
import Verification from "./pages/verification/verification.page";
import RegistrationEnded from './component/register-student/over/registration-ended.component';
import RegisterStudent from './component/register-student/register/register.component';
import HomePage from './pages/home/home.page';
import Students from "./pages/students/students.page";
import Profile from "./pages/profile/profile.page";
import MemoryGame from "./pages/memory-game/memory-game.page";
import AnimalsGame from "./pages/animals-game/animals-game";
import UserProvider from "./component/providers/user-provider.component";
import ConfirmRegister from "./pages/confirm/confirm.page";
import Colleagues from "./pages/colleagues/colleagues.page";
function App() {
  return (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="signup" element={<Signup />} /> */}
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/colleagues" element={<Colleagues />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/sound-game" element={<AnimalsGame />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path='/student-page/:id' element={<Profile />} />
        <Route path='/confirm-register' element={<ConfirmRegister />} />
        <Route path='/register-student' element={<RegisterStudent />} />
        <Route path='/registration-ended' element={<RegistrationEnded />} />
          <Route path="/animals-game" element={<AnimalsGame />} />

      </Routes>
    </BrowserRouter >
  </UserProvider>

  );
}

export default App;
