import React from "react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="ui container">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
