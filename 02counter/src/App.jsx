import { useState } from 'react'


function App() {

  let [counter, setCounter ] = useState(15)

  // let counter =5

  const addValue = () => {
    if(counter === 20 ){
      document.getElementById('#add').setAttribute('disable')
    }
    counter =counter + 1
    setCounter(counter)
    console.log("clciked",counter);
    
    
  }
  const removeValue = () => {
    if(counter === 0 ){
      document.getElementById('#remove').setAttribute('disable')
    }
    counter =counter - 1
    setCounter(counter)
    console.log("clciked",counter);
    
  }
  
  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter Value: {counter}</h2>

        <button id='add' onClick={addValue}>Add Value</button>
        <br /><br />
        <button id='remove' onClick={removeValue}>Remove Value</button>

        <p>Counter From 0 to 20  </p>
    </>
  )
}

export default App
