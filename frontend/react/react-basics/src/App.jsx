import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(c => c + 1);
  }

  function decreasecount() {
    setCount(c => c - 1);
  }
  
  return <div>
    <Counter count={count} />
    <button onClick={increasecount}>Increase Count</button>
    <button onClick={decreasecount}>Decrease Count</button>
  </div>
}

function Counter(props) {

  useEffect(() => {
    console.log("Count is increased")
  },[props.count])

  return <div>
    Count is {props.count}
  </div>
}

export default App
