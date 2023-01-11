import React from "react";
import PropTypes from "prop-types";
import classes from "./TVElement.module.css";
import Table from "../UI/Table";
import { TV_BASE_URL } from "../../constants/url";

const TVElement = ({ tvList = [], addTVRankCount, changeTVRank, getRank }) => {
  const emptyHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const handleOnClick = url => {
    window.open(`${TV_BASE_URL}${url}`);
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
          <td className={classes["tv-table__td--ranking"]}>{getRank()}</td>
          <td className={classes["tv-table__td--title"]}>
            <a href={`${TV_BASE_URL}${tv.url}`} target="_blank" rel="noopener noreferrer">
              {tv.title}
            </a>
          </td>
          <td className={classes["tv-table__td--cast"]}>{tv.cast}</td>
          <td className={classes["tv-table__td--rating"]}>{tv.rate}</td>
        </tr>
      );
    });

  return (
    <div className={classes["tv-table-container"]}>
      <Table className={classes["tv-table"]}>
        <colgroup>
          <col className={classes["tv-table__col--ranking"]} />
          <col className={classes["tv-table__col--program"]} />
          <col className={classes["tv-table__col--channel"]} />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="3" className={classes["tv-table__th--program"]}>
              프로그램
            </th>
            <th className={classes["tv-table__th--rating"]}>시청률</th>
          </tr>
        </thead>
        <tbody className={classes["tv-table__tbody"]}>
          {tvList.length === 0 ? emptyHtml : tableContentHtml(tvList)}
        </tbody>
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
