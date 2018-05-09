import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Segment, Button, Header, Form } from "semantic-ui-react";
import Section from "../../components/Section";
import plotly from 'plotly.js/dist/plotly';
import { ColorList } from "./quicksort";
import { ColorsSortForm } from "../../components/Form";

export default class BasicQS extends Component {
  state = {
    colors: new ColorList(0, 250, null, 50)
  };

  size = 4;

  componentDidMount() {
    this.renderPlot();
  }

  handleSortColors = () => {
    let colors;
    console.log(this.state.colors)
    
    colors = this.state.colors.quickSortCoordinates(null, this.updateColors, null, null, "x");
    colors = this.state.colors.quickSortCoordinates(null, this.updateColors, null, null, "y");
    colors = this.state.colors.quickSortCoordinates(null, this.updateColors, null, null, "z");

    this.setState({ colors }, this.updatePlot);
  }

  handleSortColorsLive = () => {
    this.state.colors.quickSortCoordinatesLive(null, this.updateColors)
    .then(() => console.log('success!'))

  }

  updateColors = (colors) => this.setState({ colors }, this.updatePlot);

  handleGenColor = increment => {
    let colors = new ColorList(0, 250, null, increment);
    this.setState({ colors }, this.updatePlot);
  }

  handleRandomColors = () => {
    let randomized = this.state.colors.RandomizeCoordinates();
    this.setState({ colors: randomized }, this.updatePlot);
    
  }

  renderPlot = () => {
    let colors = this.state.colors;
    
    plotly.newPlot("graphDiv", [{
      type: "scatter3d",
      mode: "markers",
      x: colors.X,
      y: colors.Y,
      z: colors.Z,
      name: "colors",
      marker: {
        color: colors.Code,
        size: this.size
      }
    }], {
      width: 1000,
      height: 600
    })
  }

  updatePlot = () => {
    let colors = this.state.colors;

    plotly.animate('graphDiv', {
      data: [{
        x: colors.X,
        y: colors.Y,
        z: colors.Z,
        marker: {
          color: colors.Code,
          size: this.size
        }
      }]
    }, {
        transition: {
          duration: 0
        },
        frame: {
          duration: 0,
          redraw: false
        }
      });
  };

  render() {

    return (
      <Section header={`RGB Colors Sorting`}>
      <Section.Content hideOverflow>
        <div className={css(styles.graphDiv)} id='graphDiv'>
        </div>
      </Section.Content>

      <Section.Footer>
        <ColorsSortForm
          handleSortColors={this.handleSortColors}
          handleSortColorsLive={this.handleSortColorsLive}
          handleRandomColors={this.handleRandomColors}
        />
      </Section.Footer>
    </Section>
    );
  }
}

const styles = StyleSheet.create({
  graphDiv: {
    margin: "-10rem -4rem"
  }
});
