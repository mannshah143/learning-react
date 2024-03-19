import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card quote = "“Work like there is someone working 24 hours a day to take it all away from you.”" username="Mark Cuban" post="Billionaire" />
      <Card />
    </>
  )
}

export default App
