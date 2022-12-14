import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Wrapper>
      <Text>요즘 뜨는 Trend는 뭐가 있을까요?</Text>
      <Text subText>지금 확인해보세요.</Text>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: ${props => (props.subText ? "3rem" : "4rem")};
  margin-top: ${props => props.subText && "35px"};
  color: #fff;
  font-family: "Pretendard Variable";
  font-variation-settings: "wght" 700, "wdth" 500, "GRAD" 200;
  text-align: center;
  background: linear-gradient(-45deg, #fff, #a9a9a9, #fff);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
