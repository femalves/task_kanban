import React from "react";

import { Icon, Menu } from "semantic-ui-react";

class Header extends React.Component {
  state = { activeItem: "gamepad" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon="labeled" color={"teal"} inverted>
        <Menu.Item
          position="right"
          name="tasks"
          active={activeItem === "tasks"}
          onClick={this.handleItemClick}
        >
          <Icon name="tasks" />
          Tasks
        </Menu.Item>

        <Menu.Item
          name="signOut"
          active={activeItem === "signOut"}
          onClick={this.handleItemClick}
        >
          <Icon name="sign out" />
          Sign out
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
