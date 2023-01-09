import React from "react";
import PropTypes from "prop-types";
import classes from "./SongElement.module.css";

const SongElement = ({ song, rating }) => {
  return (
    <tr>
      <td className={classes.album__cover}>
        <img src={song.albumCover} alt={`${song.title}_${song.album}`} />
      </td>
      <td>{rating}</td>
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.album}</td>
    </tr>
  );
};

SongElement.propTypes = {
  song: PropTypes.exact({
    title: PropTypes.string,
    album: PropTypes.string,
    singer: PropTypes.string,
    albumCover: PropTypes.string,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default SongElement;
