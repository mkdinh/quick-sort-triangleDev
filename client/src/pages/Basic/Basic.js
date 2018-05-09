import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Segment, Button, Header, Form } from "semantic-ui-react";
import { quickSort, quickSortLive, genRandom } from "./quicksort";
import Section from "../../components/Section";
import { BasicSortForm } from "../../components/Form";

export default class BasicQS extends Component {
  state = {
    nums: genRandom(1000),
    completed: false
  };

  componentDidMount() {}

  handleGenerateRandom = length => {
    if (length) {
      let random = genRandom(length);
      this.setState({ nums: random });
    }
  };

  handleSort = () => {
    let sorted = quickSort(this.state.nums);
    this.setState({ nums: sorted });
  };

  handleSortLive = () => {
    quickSortLive(this.state.nums, this.updateNum)
    .then(array => {
      this.setState({ nums: array })
    })
  }

  updateNum = nums => this.setState({ nums });

  render() {
    let { nums, completed } = this.state;

    return (
      <Section header={`Numerical Sorting`}>
        <Section.Content>
          <div className={css(styles.numDisplay)}>
            {nums.join("   ")}
          </div>
        </Section.Content>

        <Section.Footer>
          <BasicSortForm
            completed={completed}
            handleSort={this.handleSort}
            handleSortLive={this.handleSortLive}
            handleGenerateRandom={this.handleGenerateRandom}
          />
        </Section.Footer>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  numDisplay: {
    fontSize: '0.70rem'
  }
});
