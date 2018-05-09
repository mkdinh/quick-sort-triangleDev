import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Form } from "semantic-ui-react";

export default class BasicSortForm extends Component {
  state = {};

  render() {
    let {  
      handleSortColors, 
      handleSortColorsLive,
      handleRandomColors 
    } = this.props;

    return (
      <Form>
          <Button 
            color="orange"
            onClick={handleRandomColors}
            content="Randomize"
          />

          <Button primary onClick={handleSortColors} content="Sort Colors" />
          <Button primary onClick={handleSortColorsLive} content="Sort Colors Live" />
      </Form>
    );
  }
}
