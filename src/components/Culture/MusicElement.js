import React from "react";
import PropTypes from "prop-types";
import classes from "./MusicElement.module.css";

const MusicElement = ({ song, rating }) => {
  return (
    <tr className={classes["music-table__tr"]}>
      <td className={classes["music-table__cover"]}>
        <img src={song.albumCover} alt={`${song.title}_${song.album}`} />
      </td>
      <td>{rating}</td>
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.album}</td>
    </tr>
  );
};

MusicElement.propTypes = {
  song: PropTypes.exact({
    title: PropTypes.string,
    album: PropTypes.string,
    singer: PropTypes.string,
    albumCover: PropTypes.string,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default MusicElement;
