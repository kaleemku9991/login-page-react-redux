import * as React from 'react';
import "./log.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
 
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true
      })
    );
  }
  return (
    <div className='Login'>
      <form
        className='Login__form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1>Login here</h1>
        <TextField
          id="outlined-basic" type="name" label="Name"
          variant="outlined" className='txt__field'
          value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField
          id="outlined-basic" type="email" label="Email"
          variant="outlined" className='txt__field'
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <TextField
          id="outlined-basic" type="password" label="Password"
          variant="outlined" className='txt__field' value={password} onChange={(e) => setPassword(e.target.value)}  required/>
        <Button variant="contained" endIcon={<SendIcon />} className="btn__submit" type="submit"  >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Login;