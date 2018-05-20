import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Form } from "semantic-ui-react";

export default class BasicSortForm extends Component {
  state = {
    value: 50,
  };

  handleChange = ev => {
    let { value, name, type } = ev.target;
    if (type === "number") value = parseFloat(value);
    this.setState({ [name]: value });
  };

  render() {
    let { value } = this.state;

    let {
      handleSortColors,
      handleSortColorsLive,
      handleGenColors,
      handleRandomColors,
    } = this.props;

    return (
      <Form>
        <Form.Group inline>
          <Form.Field
            value={value}
            name="value"
            type="number"
            min={25}
            label="Increment"
            control="input"
            onChange={this.handleChange}
          />
          <Button
            color="orange"
            onClick={handleGenColors.bind(this, value)}
            content="Generate"
          />
          <Button
            color="orange"
            onClick={handleRandomColors}
            content="Randomize"
          />

          <Button primary onClick={handleSortColors} content="Sort Colors" />
          <Button
            primary
            onClick={handleSortColorsLive}
            content="Sort Colors Live"
          />
        </Form.Group>
      </Form>
    );
  }
}
