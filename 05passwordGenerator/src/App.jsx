import { useState,useEffect ,useCallback ,useRef} from "react"

function App() {
  const [length ,setLength] =useState(8)
  const [numberAllowed ,setNumberAllowed] =useState(false)
  const [charAllowed ,setCharAllowed] =useState(false)
  const [password ,setPassword] =useState('')
  
  //useRef hook
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(  () => {    //here we talk about optimization
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   
    if(numberAllowed)  str+="0123456789"
    if(charAllowed)  str +="!@#$&*^%~[]{}-_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  useEffect( () => {    // to run the method when the attributes value changes
    passwordGenerator()
  }, [length, numberAllowed,charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-8 my-16 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>
        <div className="flex items-center shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-gray-800 bg-gray-100"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
          className=" outline-none bg-blue-700 text-white px-3 py-2 shrink-0"
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2  ">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)} }
            />
            <label >Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
              />
              <label >Number</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input type="checkbox" 
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev);
                }}
              />
              <label >Character</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
