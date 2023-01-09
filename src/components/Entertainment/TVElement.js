import React from "react";
import PropTypes from "prop-types";
import classes from "./TVElement.module.css";
import Table from "../UI/Table";

const BASE_URL = "https://search.naver.com/search.naver";

const TVElement = ({ tvList = [], addTVRankCount, changeTVRank, getRank }) => {
  const emptyHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const handleOnClick = url => {
    window.open(`${BASE_URL}${url}`);
  };

  const calculateRanking = (index, list) => {
    if (index === 0) return;
    if (list[index - 1].rate === list[index].rate) {
      addTVRankCount();
      return;
    }
    changeTVRank();
  };

  const tableContentHtml = list =>
    list.map((tv, index) => {
      calculateRanking(index, list);
      return (
        <tr key={`${getRank()}_${tv.title}`} onClick={() => handleOnClick(tv.url)}>
          <td>{getRank()}</td>
          <td>
            <a href={`${BASE_URL}${tv.url}`} target="_blank" rel="noopener noreferrer">
              {tv.title}
            </a>
          </td>
          <td>{tv.cast}</td>
          <td>{tv.rate}</td>
        </tr>
      );
    });

  return (
    <div className={classes.table_container}>
      <Table className={classes.tv_table}>
        <colgroup>
          <col className={classes.rate_col} />
          <col className={classes.program_col} />
          <col className={classes.channel_col} />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="3" className={classes.program_tr}>
              프로그램
            </th>
            <th className={classes.views_tr}>시청률</th>
          </tr>
        </thead>
        <tbody>{tvList.length === 0 ? emptyHtml : tableContentHtml(tvList)}</tbody>
      </Table>
    </div>
  );
};

TVElement.propTypes = {
  tvList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTVRankCount: PropTypes.func.isRequired,
  changeTVRank: PropTypes.func.isRequired,
  getRank: PropTypes.func.isRequired,
};

export default TVElement;
