import React from 'react';
import "./log.scss";
import Button from '@mui/material/Button';
import {logout} from "../features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../features/userSlice';



function Logout() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className='logout'>
      <div className='logout__form'>
        <h2 className='Welcome'>Welcome to {user.name}</h2>
        <h2 className='Welcome'>Email is {user.email}</h2>
        <Button variant="contained" className="btn__logout" onClick={(e)=>handleLogout(e)}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Logout;