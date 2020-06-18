import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header />
        <div className="container">
          <Board />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
