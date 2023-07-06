// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react"
import ReactDOM from "react-dom/client"

import Intro from "./components/Intro.jsx"
import Stat from "./components/Stat.jsx"

function App() {
  return(
    <div>
      <Intro />
      <Stat />
    </div>
  )  
}

export default App
