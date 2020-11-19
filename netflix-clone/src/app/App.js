// import logo from "../logo.svg";
import React from "react";
import request from "../core/requests";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow={true}
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
