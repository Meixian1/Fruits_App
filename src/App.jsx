import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Fruits from './Pages/Fruits'
import CreateFruits from './Pages/CreateFruits'
import './App.css'
import Veggies from './Pages/Veggies'
import CreateVeggies from './Pages/CreateVeggies'

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
    <Link to ="/veggies">
      <button>Veggies</button>
    </Link>
    <Link to ="/veggies/create">
      <button>Create New Veggie</button>
    </Link>
        </nav>
    <Routes>
      <Route path='/' element={<Fruits/>}/>
      <Route path='/create' element={<CreateFruits/>}/>
      <Route path='/veggies' element={<Veggies/>}/>
      <Route path='/veggies/create' element={<CreateVeggies/>}/>
    </Routes>
    </div>
  )
}

export default App
