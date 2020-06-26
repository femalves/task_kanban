import React from "react";

import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import {} from "redux-logger";

import List from "../List/List";
import CustomButton from "../CustomButton/CustomButton";
import "./Board.scss";

class Board extends React.Component {
  render() {
    const board = this.props.board.lists.lists;

    return (
      <Grid
        columns={board.length <= 5 ? board.length + 1 : board.length}
        stackable
        divided
      >
        <Grid.Row>
          {board.map((list) => (
            <Grid.Column key={list.id}>
              <List key={list.id} data={list} />
            </Grid.Column>
          ))}
          {board.length < 6 ? (
            <Grid.Column>
              <CustomButton content="New List" icon="add"></CustomButton>
            </Grid.Column>
          ) : null}
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const props = { board: state };

  return props;
}

export default connect(mapStateToProps)(Board);
