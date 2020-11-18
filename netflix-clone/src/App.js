import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./requests";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={request.fetchNetflixOriginals}
            />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        </div>
    );
}

export default App;
