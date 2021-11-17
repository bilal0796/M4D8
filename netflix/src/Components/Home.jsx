import React, { Component } from "react";
import { Row } from "react-bootstrap";
class GetMovies extends Component {
  state = {
    movies: [],
  };
  componentDidMount = () => {
    console.log("componentDidMount");
    this.fetchMovies();
  };
  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=d87edd3&s=harry%20potter",
        {
          method: "GET",
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          movies: data.Search,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Row>
        {this.state.movies.map((m) => (
          <img className="img-fluid section-img1" key={m.imdbID} src={m.Poster} />
        ))}
      </Row>
    );
  }
}
export default GetMovies;