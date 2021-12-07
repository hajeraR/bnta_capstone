import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ZodiacDescription from './pages/ZodiacDescription';
import MonthlyHorrorScope from './pages/MonthlyHorrorScope';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/zodiac/:sign" element={<ZodiacDescription />} />
      <Route path="/horrorscope/:month" element={<MonthlyHorrorScope />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
