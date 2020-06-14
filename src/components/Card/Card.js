import React from "react";
import { Card as SemanticCard } from "semantic-ui-react";

const Card = () => (
  <SemanticCard>
    <SemanticCard.Content header="Study React" />
    <SemanticCard.Content
      description={
        "Finish doing a frontend application using React and Semantic-UI."
      }
    />
    <SemanticCard.Content extra>
      <img
        src="https://api.adorable.io/avatars/40/laf.png"
        className="ui mini middle aligned image"
        alt="avatar"
      />
    </SemanticCard.Content>
  </SemanticCard>
);

export default Card;
