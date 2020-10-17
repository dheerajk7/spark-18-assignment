import React, { Component } from "react";
import "../styles/App.scss";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    );
  }
}

export default App;
