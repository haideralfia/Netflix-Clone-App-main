import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Request";
import Footer from "../Footer";

function HomeScreen() {
  return (
    <div>
      <div className="homescreen">
        <Nav />
        <Banner />
        <Row
          title="NetflixOriginals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomeScreen;
