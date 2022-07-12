import React from 'react';
import './App.scss';
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user=useSelector(selectUser);
  return (
    <>
   {user ? <Logout/>:<Login/>}
    </>
  );
}

export default App;
