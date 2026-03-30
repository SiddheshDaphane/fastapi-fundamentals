import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
        <Link to="/">Allen</Link>
        |
        <Link to="/neet/online-coaching-class-11">Class 11th</Link>
        |
        <Link to="/neet/online-coaching-class-12">Class 12th</Link>
      </BrowserRouter>
    </div>
  )
}

function Landing() {
  return <div>
    Welcome to allen!
  </div>
}

function Class11Program() {
  return <div>
    NEET program for class 11th
  </div>
}

function Class12Program() {
  return <div>
    NEET program for class 12th
  </div>
}

export default App
