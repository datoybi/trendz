import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import MusicElement from "./MusicElement";
import Table from "../UI/Table";

const DEFAULT_SONG_TITLE = ["BTS", "Dynamite"];

const MusicTrend = () => {
  const { musicList } = useSelector(state => state.trend);

  const getBestMusic = () => {
    if (musicList.length === 0) return DEFAULT_SONG_TITLE;
    return [musicList[0].singer, musicList[0].title];
  };

  const [bestSinger, bestSong] = getBestMusic();

  const emptyHtml = (
    <tr>
      <EmptyStyle colSpan="4">데이터가 없습니다.</EmptyStyle>
    </tr>
  );

  const musicElement = list => list.map((song, index) => <MusicElement key={`${song.title}_${song.album}`} song={song} rating={index + 1} />);

  return (
    <Section>
      <Wrapper>
        <SectionTitle>
          지금 뜨는 노래는? <br />
          &apos;{bestSinger}&apos;의 &apos;{bestSong}&apos;🎶
        </SectionTitle>
        <Table>
          <colgroup>
            <Col />
            <Col />
            <Col />
          </colgroup>
          <thead>
            <tr>
              <Th colSpan="3">노래</Th>
              <Th>가수</Th>
              <Th>앨범</Th>
            </tr>
          </thead>
          <tbody>{musicList.length === 0 ? emptyHtml : musicElement(musicList)}</tbody>
        </Table>
      </Wrapper>
    </Section>
  );
};

export default MusicTrend;

const Section = styled.section`
  background-color: #fafafa;
  padding-bottom: 120px;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-bottom: 100px;
`;

const SectionTitle = styled.h1`
  margin-bottom: 48px;
  margin-top: 48px;
  font-size: 40px;
  letter-spacing: 0.009em;
  line-height: 50px;
  font-family: "Pretendard Variable";
  font-variation-settings: "wght" 1000, "wdth" 500, "GRAD" 200;
  background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre-wrap;
`;

const Col = styled.col`
  &:nth-of-type(1) {
    width: 10%;
  }

  &:nth-of-type(2) {
    width: 7%;
  }

  &:nth-of-type(3) {
    width: 35%;
  }
`;

const Th = styled.th`
  padding-top: 23px;
  padding-left: 35px;
  padding-bottom: 23px;
  font-weight: 600;

  width: ${({ children }) => {
    switch (children) {
      case "노래":
        return "40%";
      case "가수":
        return "20%";
      case "앨범":
        return "35%";
      default:
        return "0%";
    }
  }};
`;

const EmptyStyle = styled.td`
  text-align: center;
  padding-bottom: 1rem;
`;
