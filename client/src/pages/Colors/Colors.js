import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Segment, Button, Header, Form } from "semantic-ui-react";
import Section from "../../components/Section";
import plotly from "plotly.js/dist/plotly";
import { ColorList } from "./quicksort";
import { ColorsSortForm } from "../../components/Form";

export default class BasicQS extends Component {
  state = {
    colors: new ColorList(0, 250, null, 50),
    initColors: new ColorList(0, 250, null, 50),
  };

  size = 4;

  componentDidMount() {
    this.renderPlot();
  }

  handleSortColors = () => {
    let rgb;

    rgb = this.state.colors.quickSortCoordinates(null, null, null, "x");
    // console.log("-----------------------------------------------");
    rgb.quickSortCoordinates(null, null, null, "y");
    rgb = rgb.quickSortCoordinates(rgb.colors, null, null, "z");

    let colors = rgb.colors;
    let init = this.state.initColors.colors;
    let len = colors.length;

    // for (let i = 0; i < len; i++) {
    //   // console.log(
    //   //   `sorted: ${colors[i].r} ${colors[i].g} ${colors[i].b} | init: ${
    //   //     init[i].r
    //   //   } ${init[i].g} ${init[i].b}`,
    //   // );
    //   console.log(
    //     `sorted: ${colors[i].x} ${colors[i].y} ${colors[i].z} | init: ${
    //       init[i].x
    //     } ${init[i].y} ${init[i].z}`,
    //   );
    // }

    this.setState({ colors: rgb }, this.updatePlot);
  };

  handleSortColorsLive = () => {
    this.state.colors
      .quickSortCoordinatesLive(null, this.updateColors)
      .then(() => console.log("success!"));
  };

  updateColors = colors => this.setState({ colors }, this.updatePlot);

  handleGenColors = increment => {
    let colors = new ColorList(0, 250, null, increment);
    this.setState({ colors }, this.updatePlot);
  };

  handleRandomColors = () => {
    let randomized = this.state.colors.RandomizeCoordinates();
    this.setState({ colors: randomized }, this.updatePlot);
  };

  renderPlot = () => {
    let colors = this.state.colors;

    plotly.newPlot(
      "graphDiv",
      [
        {
          type: "scatter3d",
          mode: "markers",
          x: colors.X,
          y: colors.Y,
          z: colors.Z,
          name: "colors",
          marker: {
            color: colors.Code,
            size: this.size,
          },
        },
      ],
      {
        width: 1000,
        height: 600,
      },
    );
  };

  updatePlot = () => {
    let colors = this.state.colors;

    plotly.animate(
      "graphDiv",
      {
        data: [
          {
            x: colors.X,
            y: colors.Y,
            z: colors.Z,
            marker: {
              color: colors.Code,
              size: this.size,
            },
          },
        ],
      },
      {
        transition: {
          duration: 0,
        },
        frame: {
          duration: 0,
          redraw: false,
        },
      },
    );
  };

  render() {
    return (
      <Section header={`RGB Colors Sorting`}>
        <Section.Content hideOverflow>
          <div className={css(styles.graphDiv)} id="graphDiv" />
        </Section.Content>

        <Section.Footer>
          <ColorsSortForm
            handleSortColors={this.handleSortColors}
            handleSortColorsLive={this.handleSortColorsLive}
            handleGenColors={this.handleGenColors}
            handleRandomColors={this.handleRandomColors}
          />
        </Section.Footer>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  graphDiv: {
    margin: "-10rem -4rem",
  },
});
