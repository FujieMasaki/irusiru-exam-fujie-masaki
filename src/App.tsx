import React from 'react';
import './App.css';
import { LoginPage, HomePage } from "./pages"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentUser } from './recoil';

export const App = () => {

  const _currentUser = useRecoilValue(currentUser);

  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route index element={_currentUser ? <HomePage /> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={_currentUser ? <Navigate to={"/"}/> : <LoginPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
