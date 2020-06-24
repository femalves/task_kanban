import React, { useRef } from "react";
import { Card as SemanticCard, Label, Ref } from "semantic-ui-react";
import "./Card.scss";
import { useDrag, useDrop } from "react-dnd";

const Card = ({ data, index }) => {
  const ref = useRef();
  const style = {
    cursor: "grabbing",
    border: "1px dashed rgba(0, 0, 0, 0.3)",
    background: "transparent",
    boxShadow: "none",
  };

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", id: data.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedIndex === targetIndex) {
        return;
      }
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }
      // console.log(item.index);
      // console.log(index);
    },
  });

  dragRef(dropRef(ref));

  return (
    <Ref innerRef={ref} isDragging={isDragging}>
      <SemanticCard
        className="task-card"
        style={isDragging ? style : null}
        raised
      >
        <SemanticCard.Meta>
          <div className="modify" style={isDragging ? { opacity: 0 } : null}>
            <i className="trash small red icon"></i>
            <i className="pencil small black icon"></i>
          </div>
          <div className="labels">
            {data.labels.map((label) => (
              <Label
                color={label}
                key={label}
                style={isDragging ? { opacity: 0 } : null}
              />
            ))}
          </div>
        </SemanticCard.Meta>
        <SemanticCard.Content
          header={data.task}
          className="card-header"
          style={isDragging ? { opacity: 0 } : null}
        />
        <SemanticCard.Content
          description={data.content}
          style={isDragging ? { opacity: 0 } : null}
        />
        <SemanticCard.Content style={isDragging ? { opacity: 0 } : null} extra>
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
    </Ref>
  );
};

export default Card;
