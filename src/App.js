import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "./pages/MovieDetails";
import NavbarComponent from "./componets/Navbar";
import { useState } from "react";
import MovieSearched from "./pages/MovieSearched";

function App() {
  const [blackNavbar, setBlackNavbar] = useState(true);

  console.log(blackNavbar)

  const handleBlackNavbar = () => {
    setBlackNavbar(true);
  };

  const handleWhiteNavbar = () => {
    setBlackNavbar(false);
  };
  return (
    <div className="App">
      <Router>
        <NavbarComponent blackNavbar={blackNavbar} />
        <Routes>
          <Route
            path="/"
            element={<Home handleBlackNavbar={handleBlackNavbar} />}
          />
          <Route
            path="/movieDetail/:id"
            element={<MovieDetails handleWhiteNavbar={handleWhiteNavbar} />}
          />
          <Route
            path="/searchedMovie/:name"
            element={<MovieSearched/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
