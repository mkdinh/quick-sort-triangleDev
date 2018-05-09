import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { Segment, Button, Header } from "semantic-ui-react";

const Section = ({ header, children }) => {
  return (
    <Segment basic className={css(styles.segment)}>
      {header && <Header className={css(styles.header)} content={header} />}
      {children}
    </Segment>
  );
};

Section.Content = ({ children, hideOverflow }) => {
  return <div className={css(styles.content, hideOverflow && styles.hideOverflow)}> {children} </div>;
};

Section.Footer = ({ children }) => {
  return <div className={css(styles.footer)}> {children} </div>;
};

const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    color: "#65b87e",
    fontSize: "1.75rem",
  },

  segment: {
    margin: "1rem 3rem",
  },

  content: {
    height: "73vh",
    overflow: "auto",
    textAlign: "justify",
    paddingRight: '1rem',
    margin: '0',
  },

  footer: {
    textAlign: "right",
    margin: "1rem 0 0 0",
  },

  hideOverflow: {
    overflow: 'hidden'
  }
});

export default Section;
