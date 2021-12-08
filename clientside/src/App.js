import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ZodiacDescription from './pages/ZodiacDescription';
import MonthlyHorrorScope from './pages/MonthlyHorrorScope';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreators} from './state/stateIndex';



function App() {

  // const description = useSelector((state) => state.zodiacDescription);
  // const monthlyHorrorScope = useSelector((state) => state.monthlyHorrorScope)
  // const dispatch = useDispatch();

  // const { setDescription, setMonthlyHorrorScope} = bindActionCreators(actionCreators, dispatch);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/zodiac/:sign" element={<ZodiacDescription />} />
      <Route path="/horrorscope/:month" element={<MonthlyHorrorScope />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
