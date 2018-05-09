import React from "react";
import { Segment, Menu } from "semantic-ui-react";
import { StyleSheet, css } from "aphrodite";
import { withRouter } from "react-router-dom";

export class Navbar extends React.Component {
  state = {
    currentRoute: "/",
  };

  isActive = route => route === this.state.currentRoute;

  handleItemClick = (route, ev) => {
    this.props.history.push(route);
    this.setState({ currentRoute: route });
  };

  render() {
    return (
      <Segment className={css(styles.basic, styles.navbar)}>
        <Menu borderless vertical className={css(styles.basic, styles.menu)}>
          <Menu.Item
            className={css(
              styles.basic,
              styles.navItem,
              this.isActive("/quick-sort-basic") && styles.activeItem,
            )}
            content="Numerical"
            onClick={this.handleItemClick.bind(this, "/quick-sort-basic")}
          />
          <Menu.Item
            content="RGB Color"
            className={css(
              styles.basic,
              styles.navItem,
              this.isActive("/quick-sort-colors") && styles.activeItem,
            )}
            onClick={this.handleItemClick.bind(this, "/quick-sort-colors")}
          />
        </Menu>
      </Segment>
    );
  }
}

const styles = StyleSheet.create({
  basic: {
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
  },

  navbar: {
    width: "25%",
  },

  navItem: {
    transition: "all 250ms",
    fontWeight: "bold",

    ":hover": {
      background: "#65b87e",
      color: "#FFFFFF",
    },

    ":active": {
      background: "#49855b",
    },
  },

  activeItem: {
    color: "#65b87e",
  },

  menu: {
    borderRight: "1px solid #dedede",
  },
});

export default withRouter(Navbar);
