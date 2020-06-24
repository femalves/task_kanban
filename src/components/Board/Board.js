import React from "react";

import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import {} from "redux-logger";

import List from "../List/List";
import CustomButton from "../CustomButton/CustomButton";
import "./Board.scss";

class Board extends React.Component {
  render() {
    const lists = this.props.board;

    return (
      <Grid
        columns={lists.length <= 5 ? lists.length + 1 : lists.length}
        stackable
        divided
      >
        <Grid.Row>
          {lists.map((list) => (
            <Grid.Column key={list.id}>
              <List key={list.id} data={list} />
            </Grid.Column>
          ))}
          {lists.length < 6 ? (
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
  const props = { board: state.board.lists, list: state.list };
  // console.log(props);
  return props;
}

export default connect(mapStateToProps)(Board);
