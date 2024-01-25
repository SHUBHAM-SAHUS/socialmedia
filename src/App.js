import logo from './logo.svg';
import './App.css';
import SignUP from './component/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Login';
import UserProfile from './component/UserProfile';

function App() {
  return (
    <>
      <Router>
        {/* <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link> */}

        <Routes>
          <Route path='/signup' element={<SignUP />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/userprofile' element={<UserProfile/>} />
          UserProfile
        </Routes>
      </Router>
    </>
  );
}

export default App;
