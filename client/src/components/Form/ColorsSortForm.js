import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Form } from "semantic-ui-react";

export default class BasicSortForm extends Component {
  state = {
    value: 1000,
  };

  render() {
    let { value } = this.state;

    let {  
      handleSortColors, 
      handleSortColorsLive,
      handleGenColors,
      handleRandomColors 
    } = this.props;

    return (
      <Form>

        <Form.Group inline>
          <Form.Field
            value={value}
            name="value"
            type="number"
            label="Increment"
            control="input"
            onChange={this.handleChange}
          />
          <Button 
            color="orange"
            onClick={handleGenColors}
            content="Generate"
          />
          <Button 
            color="orange"
            onClick={handleRandomColors}
            content="Randomize"
          />

          <Button primary onClick={handleSortColors} content="Sort Colors" />
          <Button primary onClick={handleSortColorsLive} content="Sort Colors Live" />
          </Form.Field>
      </Form>
    );
  }
}
