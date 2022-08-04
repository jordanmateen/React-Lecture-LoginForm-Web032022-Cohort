import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
//styles
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

`

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
    <LoginWrapper>{isLoggedIn ? <HomePage name={userInfo.name} /> : <LoginForm handleLogin={userLogin}/>}</LoginWrapper>
  )
}

export default App