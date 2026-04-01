import { useState } from 'react'
import './App.css'
import { useFetch } from './custom-hooks/useFetch'
import { usePrev } from './custom-hooks/usePrev';
import { useReFetch } from './custom-hooks/useReFetch'

// function App() {
//   const [currentPost, setCurrentPost] = useState(1)
//   const { data, loading, error } = useReFetch('https://jsonplaceholder.typicode.com/posts/'+currentPost, 10000)

//   if (loading) {
//     return <div>
//       Loading......
//     </div>
//   }

//   return (
//     <>
//       <button onClick={() => setCurrentPost(1)}>Post 1</button>
//       <br />
//       <button onClick={() => setCurrentPost(2)}>Post 2</button>
//       <br />
//       <button onClick={() => setCurrentPost(3)}>Post 3</button>
//       {JSON.stringify(data)}
//     </>
//   )
// }




function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  console.log("Current count:", count);
  console.log("Prev count:", prevCount); 

  return (
    <div>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
    </div>
  )
}
export default App
