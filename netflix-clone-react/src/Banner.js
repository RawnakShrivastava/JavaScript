import React, { useState , useEffect } from 'react';
import axios from './axios';
import requests from './Requests';
import "./Banner.css";


function Banner() {
    const [movie,setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }
        fetchData();
    }, []);
    
    return (
        
        <header className="banner"
            style={{
                backgroundSize : "cover",
                backgroundImage : `url(
                    "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition : "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.original_name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{movie?.overview}</h1>        
            </div> 
            <div className="banner_fade"></div>
        </header>
    )
}

export default Banner
