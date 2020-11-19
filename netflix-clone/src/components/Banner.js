import React, { useEffect, useState } from "react";
import axios from "../core/axios";
import requests from "../core/requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url (
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            }}
        >
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            </div>
        </header>
    );
}

export default Banner;
