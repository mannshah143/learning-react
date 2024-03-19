import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  //let counter = 15;
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter + 1);
  }
  const remValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={remValue}>remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
