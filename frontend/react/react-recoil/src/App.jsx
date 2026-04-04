import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState, selector } from 'recoil';



// ContextAPI code

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{count, setCount}}>
//     {children}
//   </CountContext.Provider>
// }


// function App() {

//   return (
//     <>
//     <Parent />
//      </>
//   )
// }

// function Parent() {
//   return <CountContextProvider>
//     <Increase />
//     <Decrease />
//     <Value />
//     </CountContextProvider>
// }

// function Increase() {
//   const {setCount} = useContext(CountContext);
//   return <div>
//     <button onClick={() => setCount(c => c+1)}>Increase</button>
//   </div>
// }

// function Decrease() {
//   const {setCount} = useContext(CountContext);
//   return <div>
//     <button onClick={() => setCount(c => c-1)}>Increase</button>
//   </div>
// }

// function Value() {
//   const {count} = useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }




const counter = atom({
  key: 'countStateKey',
  default: 0
})

const even = selector({
  key: 'isEven',
  get: function({ get }) {
    const count = get(counter)
    return count % 2 === 0;
  }
})


function Parent() {
  return <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
      <IsEven />
    </RecoilRoot>
}

function Increase() {
  const setCount = useSetRecoilState(counter);

  return <div>
    <button onClick={() => setCount(c => c+2)}>Increase</button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counter);

  return <div>
    <button onClick={() => setCount(c => c-1)}>Decrease</button>
  </div>
}

function Value() {
  const countValue = useRecoilValue(counter);
  return <div>
    {countValue}
  </div>
}

function IsEven() {
  const isEven = useRecoilValue(even)
  return <div>
    {isEven ? "Even": "odd"}
  </div>
}

function App() {

  return (
    <>
    <Parent />
     </>
  )
}

export default App
