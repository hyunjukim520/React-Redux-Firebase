import React, { Component } from "react";

import axios from "axios";
import Scream from "../scream/Scream";

class Home extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then(res => {
        this.setState({
          screams: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          screams: null
        });
      });
  }
  render() {
    const { screams } = this.state;
    let screamsMarkup = screams ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>There are no screams.</p>
    );

    return <div>{screamsMarkup}</div>;
  }
}

export default Home;
