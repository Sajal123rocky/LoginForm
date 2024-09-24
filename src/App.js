import logo from './logo.svg';
import './App.css';
import LoginBody from './LoginBody';
import LoginHeader from './LoginHeader';
import UserDetails from './UserDisplay';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginBody />} />
        <Route path="/userDisplay" element={<UserDetails />} />
        {/* <Route path="/userDetails" element={< />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
