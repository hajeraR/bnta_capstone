import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
// import { actionCreators} from './state/stateIndex';
import CalendarPage from './pages/CalendarPage'

import HomePage from './pages/HomePage'
import ZodiacDescriptionsPage from './pages/ZodiacDescriptionsPage'

import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/descriptions" element={<ZodiacDescriptionsPage/>} />
      <Route exact path="/calendar" element={<CalendarPage/>} />
      {/* <Redirect to="/" /> */}
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
