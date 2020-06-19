import React from "react";
import List from "../List/List";
import { Grid } from "semantic-ui-react";
import CustomButton from "../CustomButton/CustomButton";
import { loadLists } from "../../services/api";

const lists = loadLists();
const Board = () => {
  console.log(lists);
  return (
    <Grid columns={lists.length + 1} stackable divided>
      <Grid.Row>
        {lists.map((list) => (
          <Grid.Column key={list.id}>
            <List key={list.id} data={list} />
          </Grid.Column>
        ))}
        <Grid.Column>
          <CustomButton content="New List" icon="add"></CustomButton>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Board;
