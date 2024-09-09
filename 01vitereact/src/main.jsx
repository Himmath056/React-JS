import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
    return(
        <div>
            <h1>Custom  App !</h1>
        </div>
    )
}


// const ReactElement ={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank",                                             
//     },
//     children:'click me to visit google',
// }

const anotherElement =(
    <a href="htpps://google.com" target='_blank'>Visit Google</a>
)

const anotherUser ="Chai aur React"

const reactElement =React.createElement(
    'a',
    {
        href:"https://google.com",
        target:"_blank",
    },
    'click me to visit google',
    anotherUser         /* evaluated expression*/ 
)

createRoot(document.getElementById('root')).render(
  reactElement
    // <App/>
 
)
