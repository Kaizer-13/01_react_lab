import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function InputBox(props){
    const [value, setEmail] = useState('')
    const [error] = useState('')
    const [place] = useState('')
    return (
        <div className={'inputContainer'}>
        <input
          value={value}
          placeholder={place}
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{error}</label>
      </div>
    )
}

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setError] = useState ('')  
  const navigate = useNavigate()

  const onButtonClick = () => {
    if(email=="Admin"&&password=="1234"){
        navigate('/home')
    }
    else{
        setError("Email & Password mismatch ")
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    
      <div className={'inputContainer'}>
        <label className="errorLabel">{loginError}</label>
      </div>
    </div>
  )
}

export default Login