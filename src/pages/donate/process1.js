import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/background/background.png";
import hello from "../../assets/icon/hello.png";
import PostBtngo from "../../components/postbtngo";
import Header from "../../components/Layout/Header";

const StyledParagraph1 = styled.p`
  font-weight: 900;
  font-size: 30px;
  position: fixed;
  color: black;
  z-index: 1;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
  bottom: 75%;
  text-align: center;
`;
const StyledParagraph2 = styled.p`
  white-space: nowrap;
  font-weight: 900;
  font-size: 30px;
  position: fixed;
  color: black;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30%;
  text-align: center;
`;
const PostBg = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover; /* 배경 이미지를 화면에 꽉 채우도록 설정 */
  height: 876px; /* 화면 높이를 860px로 설정 */
  width: 390px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 0;
`;

const BoxImg = styled.div`
  position: fixed;
  z-index: 2;
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  bottom: 45%;
`;
const Process1 = () => {
  return (
    <>
      <Header />
      <StyledParagraph1>안녕하세요.</StyledParagraph1>
      <BoxImg>
        <img src={hello} />
      </BoxImg>
      <StyledParagraph2>
        남경현님
        <br />
        만나서 반갑습니다!
      </StyledParagraph2>
      <PostBtngo value="다음으로" type="button" to="/donate/process2" />
    </>
  );
};

export default Process1;
