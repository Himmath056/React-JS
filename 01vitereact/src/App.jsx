import Chai from "./chai"

function App() {
  const  username ="chai aur code"

  return (
  <div>
    <Chai/>
    {<h1>Chai aur React {username}</h1>    /* {username} evaluated expression */}
    <p>Test para</p>
  </div>
  )
}

export default App
