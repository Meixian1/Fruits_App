import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Fruits from './Pages/Fruits'
import CreateFruits from './Pages/CreateFruits'
import './App.css'

function App() {

  return (
    <div>
    <nav>
      <Link to = "/">
      <button>Home</button>
      </Link>
    <Link to ="/create">
      <button>Create</button>
    </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits/>}/>
      <Route path='/create' element={<CreateFruits/>}/>
    </Routes>
    </div>
  )
}

export default App
