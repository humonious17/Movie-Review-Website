import React from "react";
import Hero from "../Hero/Hero";

export default function Home(props) {
    const movies = props.movies;
    return (
        <div className="home">
            <Hero movies={movies}/>
        </div>
    )
}