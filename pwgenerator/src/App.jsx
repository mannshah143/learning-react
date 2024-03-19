import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  function changeLength(event) {
    setLength(event.target.value)
  }

  function changeNumAllowed() {
    setNumAllowed(prevNumAllowed => !prevNumAllowed)
  }

  function changeSymbolAllowed() {
    setSymbolAllowed(prevSymbolAllowed => !prevSymbolAllowed)
  }

  function copyPassword () {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) {
      str += "0123456789"
    }
    if(symbolAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }

    setPassword(pass)
  }, [length, numAllowed, symbolAllowed])

  useEffect (() => {
    generatePassword();
  }, [length, numAllowed, symbolAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={24} value={length} className='cursor-pointer' onChange={changeLength} name='' id=''/>
           <label htmlFor='length'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" checked={numAllowed} onChange={changeNumAllowed} name='' id='' />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" checked={symbolAllowed} onChange={changeSymbolAllowed} name='' id='' />
          <label htmlFor="symbolInput">Symbols</label>
        </div> 
      </div>
    </div>
  )
}

export default App
