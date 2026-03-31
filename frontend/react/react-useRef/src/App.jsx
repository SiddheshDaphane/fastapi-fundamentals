import { createContext } from 'react';
import { useContext } from 'react';
import { useRef, useState } from 'react'
import './App.css'

// UseRef code for understanding useRef hook. 

// function App() {
//   const [time, setTime] = useState(0);
//   const intervalRef = useRef(null);

//   function startTimer() {
//     if (intervalRef.current) return;
//     console.log("Clock starts")
//     intervalRef.current = setInterval(() => {
//       setTime(t => t +1)
//     }, 1000)
//   }

//   function stopTimer() {
//     clearInterval(intervalRef.current)
//     console.log("clock stops")
//     intervalRef.current = null
//   }

//   return (
//     <>
//     {time}
//     <button onClick={startTimer}>Start</button>
//     <br />
//     <button onClick={stopTimer}>Stop</button>
//     </>
//   )
// }





function App() {
  return <div>
    Understanding Context API !
    <Parent />
  </div>
}

const CountContext = createContext();

function CoountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </ CountContext.Provider>
}

function Parent() {
  return <div>
    <CoountContextProvider>
      <Value />
      <Increase />
      <Decrease />
    </CoountContextProvider>
  </div>
}

function Increase() {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count+1)}>Increase</button>
  </div>
}

function Decrease() {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count-1)}>Decrease</button>
  </div>
}

function Value() {
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}





export default App
