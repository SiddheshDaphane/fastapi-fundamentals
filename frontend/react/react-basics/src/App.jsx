import { useState } from "react"


function App() {
  return (
  <div>
    Hi there!
    <Counter></Counter>
  </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0)

  function increasecount() {
    setCount(count + 1)
  }

  function decreasecount() {
    setCount( count - 1)
  }

  function resetcount() {
    setCount(0)
  }

  return <div>
    <h2>{count}</h2>
    <button onClick={increasecount}>Increase 
    Count</button>
    <button onClick={decreasecount}>Decrease Count</button>
    <button onClick={resetcount}>Reset Count</button>
  </div>
}


export default App
