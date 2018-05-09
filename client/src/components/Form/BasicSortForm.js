import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Form } from "semantic-ui-react";

export default class BasicSortForm extends Component {
  state = {
    value: 1000,
  };

  handleChange = ev => {
    let { value, name } = ev.target;
    this.setState({ [name]: value });
  };

  render() {
    let { value } = this.state;
    let { 
      handleSort, 
      handleSortLive, 
      handleGenerateRandom 
    } = this.props;

    return (
      <Form>
        <Form.Group inline>
          <Form.Field
            value={value}
            name="value"
            type="number"
            label="# of elements"
            control="input"
            onChange={this.handleChange}
          />
          <Button 
            color="orange"
            onClick={handleGenerateRandom.bind(this, value)}
            content="Generate"
          />
          <Button primary onClick={handleSort} content="Sort" />
          <Button primary onClick={handleSortLive} content="Sort Live" />
        </Form.Group>
      </Form>
    );
  }
}
