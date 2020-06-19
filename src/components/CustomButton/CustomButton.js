import React from "react";
import { Button } from "semantic-ui-react";

const CustomButton = (props) => (
  <Button
    color="teal"
    content={props.content}
    icon={props.icon}
    labelPosition="left"
  />
);

export default CustomButton;
