import { useState, useEffect } from 'react'
import './App.css'
import api from './assets/api/axiosConfig'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/components/Home/Home'
import Header from './assets/components/header'
import Trailer from './assets/components/trailer/Trailer'
import Reviews from './assets/components/Reviews/Reviews'

function App() {
 
  const [movies, SetMovies] = useState([])
  
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  async function getMovies() {

    try {
      const response = await api.get('api/v1/movies')
      console.log(response.data)
      SetMovies(response.data)
      
    } catch(err) {
      console.log(err)
    }
    
  }

  async function getMovieData(movieId) {
    const response = await api.get(`/api/v1/movies/${movieId}`)
    const singleMovie = response.data;
    setMovie(singleMovie);
    setReviews(singleMovie.reviewIds)
    //console.log(reviews)
    
  }

  useEffect(() => {getMovies()}, [])
  //console.log("App component rendered")
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}/>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews} movie={movie}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
