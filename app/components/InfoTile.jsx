import React from "react";
import PropTypes from "prop-types";

const InfoTile = ({ amount, title }) => (
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">{ amount }</p>
      <p className="subtitle">{ title }</p>
    </article>
  </div>
);

InfoTile.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoTile;
