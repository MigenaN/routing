import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import HelloPage from './component/Hello';
import Page from './component/4page';
import StyledPage from './component/Styled';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/home" element={<Home/>} />
      <Route path="/:number" element={<Page/>} />
      <Route path="/:word" element={<HelloPage/>} />
      <Route path="/:word/:textColor/:bgColor" element={<StyledPage/>} />
    
  </Routes>
  </BrowserRouter>
  )
}

export default App
