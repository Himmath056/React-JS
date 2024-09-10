import { useState } from "react"

function App() {
  const[color , setColor] =useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-3xl py-2">
              <button className=" outline-none px-4 py-2 rounded-3xl text-white shadow-lg "
              style={{backgroundColor:"red"}}   onClick={ ()=>setColor('red') }>Red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"green"}} onClick={ ()=>setColor('green') } >Green</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"blue"}} onClick={ ()=>setColor('blue') } >Blue</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"orange"}}  onClick={ ()=>setColor('orange') } >Orange</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"pink"}}  onClick={ ()=>setColor('pink') } >Pink</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"black"}}  onClick={ ()=>setColor('black') } >Black</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 rounded-2xl py-2">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{backgroundColor:"violet"}}  onClick={ ()=>setColor('violet') } >Violet</button>
          </div>
      </div>
    </div>
  )
}

export default App
