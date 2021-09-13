import React, { useState , useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import Expanded from "./Expanded";



const base_url = 'http://image.tmdb.org/t/p/original'

function Row({title, fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [currentAsset,setCurrentAsset] = useState([]);
    const [isExpanded,setIsExpanded] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, []);

    function expand(movie,h){
        setCurrentAsset(movie);
        setIsExpanded(!isExpanded); 
        console.log(h);
        window.scrollTo(0,h);

    }
    // console.log(movies);
    return (
        <div>
            <h2 className="row_title">{title}</h2>
            <div className = "row_posters">
                {movies.map(movie => (
                            <img 
                            id={movie.id}
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}
                            onClick={() => expand(movie,'row_poster')}
                        />        
                ))}
            </div>
            {isExpanded && <Expanded className="panel_expanded" currPoster={currentAsset} />}                       
        </div>
    )
}

export default Row
