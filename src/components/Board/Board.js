import React from "react";
import List from "../List/List";
import { Grid } from "semantic-ui-react";
import CustomButton from "../CustomButton/CustomButton";

const Board = () => (
  <Grid columns={6} divided>
    <Grid.Row>
      <Grid.Column>
        <List></List>
      </Grid.Column>
      <Grid.Column>
        <List></List>
      </Grid.Column>
      <Grid.Column>
        <List></List>
      </Grid.Column>
      <Grid.Column>
        <List></List>
      </Grid.Column>
      <Grid.Column>
        <List></List>
      </Grid.Column>
      <Grid.Column>
        <CustomButton></CustomButton>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Board;
