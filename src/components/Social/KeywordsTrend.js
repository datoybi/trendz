import React, { useRef, useState, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";
import KeywordTrend from "./KeywordTrend";
import { LOADING_KEYWORD_COUNT } from "../../constants/trendz";
import { actions } from "../../store/slice";
import loadIcon from "../../assets/plus_icon.png";

const KeywordsTrend = forwardRef((_, keywordRef) => {
  const keywordContainer = useRef();
  const [keywordHeight, setKeywordHeight] = useState([]);
  const { keywords } = useSelector(state => state.trend);
  const { keywordCount } = useSelector(state => state.trend);
  const dispatch = useDispatch();

  const calculateHeight = () => {
    const height = keywordHeight.reduce((acc, element, index) => {
      if (keywordCount > index) return acc + element;
      return acc;
    }, 0);

    keywordContainer.current.style.height = `${height}px`;
  };

  useEffect(() => {
    calculateHeight();
  }, [keywordHeight, keywordCount]);

  const getHeight = height => {
    setKeywordHeight(prev => [...prev, height]);
  };

  const keywordElement = keywords.map((keyword, index) => (
    <KeywordTrend
      getHeight={getHeight}
      key={`${new Date(keyword.pubDate).getTime()}_${keyword.keyword}`}
      keyword={keyword}
      pastPubDate={index !== 0 && keywords[index - 1].pubDate}
      currentIndex={index}
      maxCount={keywordCount}
    />
  ));

  const loadKeyword = () => {
    calculateHeight();
    dispatch(actions.increaseKeywordCount());
  };

  const isVisibleLoadButton = keywordElement.length >= LOADING_KEYWORD_COUNT && keywordCount !== keywordElement.length;

  return (
    <Section ref={keywordRef}>
      <Wrapper>
        <Title>
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </Title>
        <Contents ref={keywordContainer}>
          <ul>{keywordElement}</ul>
        </Contents>
        {isVisibleLoadButton && (
          <LoadButton type="button" onClick={loadKeyword}>
            <img src={loadIcon} alt="더보기" />
          </LoadButton>
        )}
      </Wrapper>
    </Section>
  );
});

export default KeywordsTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-top: 160px;
`;

const Title = styled.h1`
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

const Contents = styled.div`
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

const LoadButton = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  border: 0;
  cursor: pointer;
  background: transparent;

  &:hover {
    opacity: 0.6;
  }

  &:active > img {
    transform: rotate(1turn);
  }

  & > img {
    width: 40px;
    position: absolute;
    top: -16.7px;
    transition: transform 0.3s;
  }
`;
