import React, { useState } from 'react';
import HomePage from './features/homepage/HomePage';
import LoginForm from './features/loginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [admin] = useState({
    name: 'x',
    email: 'y',
    password: 'z'
  });

  const userLogin = (userData) => {
    setUserInfo({
      name: userData.formName,
      email: userData.formEmail,
      password: userData.formPass
    })

    if(userInfo.name === admin.name && userInfo.email === admin.email && userInfo.password === admin.password){
      setIsLoggedIn(true)
    }

  }

  return (
    <>{isLoggedIn ? <HomePage name={userInfo.name} /> : <LoginForm handleLogin={userLogin}/>}</>
  )
}

export default App