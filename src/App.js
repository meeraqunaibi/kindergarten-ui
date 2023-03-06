import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationEnded from './component/register-student/over/registration-ended.component';
import RegisterStudent from './component/register-student/register/register.component';
import HomePage from './pages/home_page/home-page.pages';
import StudenPage from './pages/student/student.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path='/register-student' element={<RegisterStudent />} />
          <Route path='/registration-ended' element={<RegistrationEnded />} />
          <Route path='/student-page' element={<StudenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
