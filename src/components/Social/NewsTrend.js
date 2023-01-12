import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { NEWS_BASE_URL } from "../../constants/url";

const NewsTrend = () => {
  const { news } = useSelector(state => state.trend);

  const newsHTML = news.map(([title, url]) => (
    <a href={`${NEWS_BASE_URL}${url}`} key={`${title}_${url}`} target="_blank" rel="noopener noreferrer">
      <Item>
        <p>{title}</p>
      </Item>
    </a>
  ));

  return (
    <Section>
      <Wrapper>
        <Title>
          BBC Korea가 엄선한 <br />톱 뉴스를 접해보세요.
        </Title>
        <List>{newsHTML}</List>
      </Wrapper>
    </Section>
  );
};

export default NewsTrend;

const Section = styled.section`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  width: 980px;
`;

const Title = styled.p`
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

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.li`
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 1.6rem;
  width: 130px;
  height: 120px;
  font-weight: 500;

  & > p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 25px;
  }

  &:hover {
    box-shadow: 10px 10px 20px 0 rgb(0 0 0 / 4%), -10px 0 20px 0 rgb(0 0 0 / 4%);
  }
`;
