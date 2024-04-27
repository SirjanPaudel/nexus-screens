import './App.css';
import * as React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";


import { Error, Land, Login } from './pages';
import { Allmovies, SharedLayout } from './pages/dashboard';
import Movie from './pages/dashboard/Movie';

function App() {

  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/land' element={ <Land></Land> } />
    <Route path='/login' element={ <Login></Login> } />
    <Route path='/' element={<SharedLayout></SharedLayout>}>

    <Route index element={<Allmovies></Allmovies>}/>
    <Route path='/movie' element={<Movie></Movie>}/>
    
    </Route>

    <Route path='*' element={<Error/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
