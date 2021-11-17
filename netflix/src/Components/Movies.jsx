import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
class GetMovies2ndrow extends Component {
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
        "http://www.omdbapi.com/?apikey=d87edd3&s=pirates%20of%20the%20caribbean",
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
      <section className="shows section-center">
        <h3 className="shows-title">pirates of the caribbean</h3>
        <div className="shows-imgs" id="romantic">
          {this.state.movies.map((m) => (
            <img
              className="img-fluid section-img mb-3"
              key={m.imdbID}
              src={m.Poster}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default GetMovies2ndrow;