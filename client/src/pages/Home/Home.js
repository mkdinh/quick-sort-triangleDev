import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Link } from 'react-router-dom';
import { Segment, Button, Header, Form } from "semantic-ui-react";
import Section from "../../components/Section";

export default props => {
  return (
    <Section header="Code Challenge #2 Quick Sort">
    <Section.Content>
        Create an application that:
      <ul>
        <li>generate an array of random number</li>
        <li>display array on the webpage</li>
        <li>sort the array with quick sort</li>
        <li>display the result</li>
      </ul>

      <p>Bonus: display progress while sorting!</p>
      
      <p>If you're familiar with quick sort: 
        <Link to="/quick-sort-colors"> use quick sort to sort rgb colors graphically</Link>
      </p>
    </Section.Content>
    </Section>
)}