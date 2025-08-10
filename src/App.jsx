import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
