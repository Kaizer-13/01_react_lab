import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './login'
import Home from './home'
import './App.css';
import TaskManager from './taskmanager';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/home" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/next-page" element={< TaskManager/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
