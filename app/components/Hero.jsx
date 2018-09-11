import React from "react";
import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => (
  <section className="hero is-info welcome is-small">
    <div className="hero-body">
      <h1 className="title">{ title }</h1>
      <h2 className="subtitle">{ subtitle }</h2>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Hero;
