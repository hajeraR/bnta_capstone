import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
// import { actionCreators} from './state/stateIndex';
import CalendarPage from './pages/CalendarPage'

import HomePage from './pages/HomePage'
import ZodiacDescriptionsPage from './pages/ZodiacDescriptionsPage'

import React from 'react'
import HorrorPage from './pages/HorrorPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/descriptions/:zodiacSign" element={<ZodiacDescriptionsPage/>} />
      <Route exact path="/calendar" element={<CalendarPage/>} />
      <Route exact path="/horrorPage" element={<HorrorPage/>} />
      {/* <Redirect to="/" /> */}
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
