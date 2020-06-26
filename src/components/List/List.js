import React from "react";
import Card from "../Card/Card";
import { Divider } from "semantic-ui-react";
import "./List.scss";
import { connect } from "react-redux";

import { removeList } from "../../redux/list/list.actions";

const List = ({ data, removeList }) => {
  console.log("in list", data);
  return (
    <div className={`card-list`}>
      <header>
        <h3 className="title">{data.title}</h3>
        <span className="modify">
          {data.creatable && <i className="plus large teal icon"></i>}
          <i
            className="trash large red icon"
            onClick={() => removeList(data)}
          ></i>
          <i className="pencil large icon"></i>
        </span>
      </header>
      <Divider></Divider>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} card={card} list={data} />
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeList: (list) => dispatch(removeList(list)), // <-- manually dispatches
});

export default connect(null, mapDispatchToProps)(List);
