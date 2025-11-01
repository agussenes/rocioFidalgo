import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Vistas 
import Home from './pages/home/Home';


// Pagina error 404 
import NotFound from './pages/notFound/NotFound';

// Pagina legales 


function Router() {
  return (
    <>
      <Routes>
          {/* Routes UI general  */}
        <Route path="/" element={ <Home/> } />
        

        
        {/* Legales  */}
        

        {/* Not found  */}
        <Route path="*" element={ <NotFound/> } />

      </Routes>
    </>
  )
}

export default Router;