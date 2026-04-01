import { useState } from 'react'
import './App.css'
import { useFetch } from './custom-hooks/useFetch'
import { useReFetch } from './custom-hooks/useReFetch'

function App() {
  const [currentPost, setCurrentPost] = useState(1)
  const { data, loading, error } = useReFetch('https://jsonplaceholder.typicode.com/posts/'+currentPost, 10000)

  if (loading) {
    return <div>
      Loading......
    </div>
  }

  return (
    <>
      <button onClick={() => setCurrentPost(1)}>Post 1</button>
      <br />
      <button onClick={() => setCurrentPost(2)}>Post 2</button>
      <br />
      <button onClick={() => setCurrentPost(3)}>Post 3</button>
      {JSON.stringify(data)}
    </>
  )
}

export default App
