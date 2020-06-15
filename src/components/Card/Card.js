import React from "react";
import { Card as SemanticCard, Label } from "semantic-ui-react";
import "./Card.scss";

const Card = ({ data }) => (
  <SemanticCard className="task-card" raised>
    <SemanticCard.Meta>
      {data.labels.map((label) => (
        <Label color={label} key={label} />
      ))}
    </SemanticCard.Meta>
    <SemanticCard.Content header={data.task} className="card-header" />
    <SemanticCard.Content description={data.content} />
    <SemanticCard.Content extra>
      {data.user ? (
        <img
          src={data.user}
          className="ui mini middle aligned image"
          alt="avatar"
        />
      ) : (
        <img
          src="https://api.adorable.io/avatars/40/abde.png"
          className="ui mini middle aligned image"
          alt="avatar"
        />
      )}
    </SemanticCard.Content>
  </SemanticCard>
);

export default Card;
