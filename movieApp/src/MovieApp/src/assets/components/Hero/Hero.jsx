import './Hero.css'
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function Hero(props) {
    const movies = props.movies;
    const navigate = useNavigate();
    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`)
    }
    return (
        <Carousel className='movie-carousel-container'>
           {
            movies.map(movie => {
                return (
                    <Paper key={movie.imdbId}>
                    <div className="movie-card-container" style={{"--img" : `url(${movie.backdrops[3]})`}}>
                        <div className="movie-card">
                            <div className="movie-details">
                                <div className="movie-poster">
                                    <img src={movie.poster} alt="#" />
                                </div>
                                <div className="movie-name">
                                    <h1>{movie.title}</h1>
                                </div>
                                <div className='playButton'>
                                    <Link to={`Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} style={{ color: '#FFF' }}>
                                   
                                    <FontAwesomeIcon className='play-button-icon'
                                        icon= {faCirclePlay}></FontAwesomeIcon>

                                    </Link>
                                </div>

                                <Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                            </div>
                        </div>
                    </div>
                </Paper>
                )
            })
           }
        </Carousel>
    
    )
}