import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current) return;
    console.log("Clock starts")
    intervalRef.current = setInterval(() => {
      setTime(t => t +1)
    }, 1000)
  }

  function stopTimer() {
    clearInterval(intervalRef.current)
    console.log("clock stops")
    intervalRef.current = null
  }

  return (
    <>
    {time}
    <button onClick={startTimer}>Start</button>
    <br />
    <button onClick={stopTimer}>Stop</button>
    </>
  )
}

export default App
