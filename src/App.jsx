import { useState } from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import Error404 from './components/Error404'
import Nav from './components/Nav'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<A />} />
          <Route path='/pagina2' element={<B />} />
          <Route path='/pagina3' element={<C />} />
          <Route path='/register' element={<Error404 />} />
          <Route path='/pagina1' element={<Navigate to ="/" />} />

          <Route path='/pagina4/:letra' element={<D />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
