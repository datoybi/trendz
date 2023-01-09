/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Table.module.css";

const Table = ({ className, children }) => {
  const cssClass = `${classes.table} ${className}`;

  return (
    <div className={classes.wrap}>
      <table className={cssClass}>{children}</table>
    </div>
  );
};

export default Table;
