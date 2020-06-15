import React from "react";
import Card from "../Card/Card";
import { Divider } from "semantic-ui-react";
const List = ({ data }) => {
  return (
    <div className={`card-list ${data.done}`} done={data.done}>
      <header>
        <h3>
          {data.title}
          {data.creatable && (
            <a href="/">
              {" "}
              <i className="plus circle teal icon"></i>
            </a>
          )}
        </h3>
      </header>
      <Divider></Divider>
      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </div>
  );
};

export default List;
