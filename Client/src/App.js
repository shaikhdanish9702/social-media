import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile'
import Auth from './pages/Auth/Auth'
import {Routes ,Route,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  // console.log(user)
  return (
    <div className="App">
      <div className="blur blur-left" ></div>
        <div className="blur blur-right" ></div>
       <Routes>
       <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
       </Routes>
    </div>
  );
}

export default App;
