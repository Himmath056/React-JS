import { useState } from 'react'
import Card from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name :"Himmath",
    age:21,
  }
  let newArr =[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4 '>Tailwind Test </h1>
      <Card  username="chai aur code" btnText="Click me"/>
      <Card  username="Himmath Kumar" btnText="visit me"/>

    </>
  )
}

export default App
