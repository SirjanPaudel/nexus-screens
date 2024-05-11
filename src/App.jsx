import './App.css';
import * as React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Error, Land, Login } from './pages';
import { Allmovies, SharedLayout } from './pages/dashboard';
import Movie from './pages/dashboard/Movie';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
    <ToastContainer position="top-center"/>
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
