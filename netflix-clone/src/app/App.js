// import logo from "../logo.svg";
import React from "react";
import Row from "../components/Row";
import request from "../core/requests";

function App() {
    return (
        <div className="App">
            <h1>Netflix Clone</h1>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={request.fetchNetflixOriginals}
            />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row
                title="Romancen Movies"
                fetchUrl={request.fetchRomancenMovies}
            />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    );
}

export default App;
