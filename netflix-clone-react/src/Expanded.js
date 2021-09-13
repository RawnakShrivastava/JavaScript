import React from 'react'
import "./Expanded.css"

function Expanded({currPoster}) {
    return (
        <div className="banner-inner"
            style={{
                backgroundSize : "cover",
                backgroundImage : `url(
                    "http://image.tmdb.org/t/p/original/${currPoster?.backdrop_path}"
                    )`,
                backgroundPosition : "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {currPoster?.title || currPoster?.original_name || currPoster?.original_name}
                </h1>
                <h1 className="banner_description">{currPoster?.overview}</h1>        
            </div> 
            <div className="banner_fade"></div>
        </div>
    )
}

export default Expanded
