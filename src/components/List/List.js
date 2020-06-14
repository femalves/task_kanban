import React from "react";
import Card from "../Card/Card";
import { Divider } from "semantic-ui-react";
const List = () => {
  return (
    <div>
      <header>
        <h3>
          Tasks{" "}
          <a href="/">
            <i className="plus circle teal icon"></i>
          </a>
        </h3>
      </header>
      <Divider></Divider>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default List;
