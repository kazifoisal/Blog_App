import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ByCtegoryPage from './pages/ByCtegoryPage'
import PorstDestailsPage from './pages/PorstDestailsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
         <Route path='/byCategory/:categoryID' element={<ByCtegoryPage/>}></Route>
         <Route path='/postDetails/:postID' element={<PorstDestailsPage/>}></Route>
         <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
        
      </HashRouter>
    </div>
  )
}

export default App
