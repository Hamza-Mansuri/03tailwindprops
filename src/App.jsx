import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

//props components ko re-usable banata he.

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Hamza",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>

      {/* to insert image website name  PEXELS and copy that address. */}

      <Card username = "Hamza Mansuri" btnText="Click Me"/>

      <Card username = "chai aur code" someObj={myObj} someObj2={newArr}/>

      
    </>
  )
}

export default App
