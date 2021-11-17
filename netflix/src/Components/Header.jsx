import { Component } from "react";
import { Carousel } from "react-bootstrap";
class Header extends Component {
  state = {
    gallery1: [],
  };
  OMDB_URL = "https://www.omdbapi.com/?apikey=d87edd3";

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = () => {
    fetch(this.OMDB_URL + "&s=harry%20potter")
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.Response === "True") {
          this.setState({ gallery1: responseObject.Search });
        } else {
          this.setState({ error: true });
        }
      });
  };
  render() {
    return (
      <Carousel>
        {this.state.gallery1.map((m) => (
          <Carousel.Item>
            <img className="carousel-img"  src={m.Poster} alt="First slide" />
            <Carousel.Caption>
              <h3>{m.Title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
export default Header;