import { useEffect, useRef } from "react";
// import api from 'src/assets/api/axiosConfig.jsx'
import React from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";
import './Reviews.css'


export default function Reviews({getMovieData, movie, reviews, setReviews}) {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId
    
    useEffect(() => {
        getMovieData(movieId)
    },[])

    //console.log("review Componenet redered")
    
    async function addReview(event) {
        
        const rev = revText.current
        const response = await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId})
        
        const updatedReviews = [...reviews, {body:rev.value}]
        
        
        rev.value = ""
        setReviews(updatedReviews)
    }

    return (
        <div className="reviews">
            <div className="left">
                <h3>Reviews</h3>
                {movie && <img src={movie.poster} alt="" />}
            </div>

            <div className="right">
                <ReviewForm handelSubmit={addReview} revText={revText} labelText={'Write a review'}></ReviewForm>
                
                
                {reviews &&
                    
                    reviews.map(r => {
                        return (
                            <div>
                                <p key={r.body}>{r.body}</p>
                                <hr/>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}