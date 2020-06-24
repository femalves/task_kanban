import React from "react";
import Card from "../Card/Card";
import { Divider } from "semantic-ui-react";
import "./List.scss";
const List = ({ data }) => {
  return (
    <div className={`card-list`}>
      <header>
        <h3 className="title">{data.title}</h3>
        <span className="modify">
          {data.creatable && <i className="plus large teal icon"></i>}
          <i className="trash large red icon"></i>
          <i className="pencil large icon"></i>
        </span>
      </header>
      <Divider></Divider>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} data={card} />
        ))}
      </ul>
    </div>
  );
};

export default List;
