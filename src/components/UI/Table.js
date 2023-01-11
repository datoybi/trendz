import React from "react";
import PropTypes from "prop-types";
import classes from "./Table.module.css";

const Table = ({ className, children }) => {
  const cssClass = `${classes.table__inner} ${className}`;

  return (
    <div className={classes.table}>
      <table className={cssClass}>{children}</table>
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;
