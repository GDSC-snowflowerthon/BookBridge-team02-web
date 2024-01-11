import React from "react";
import styled from "@emotion/styled";
import { common } from "../../styles/common";
import backgroundImage from "../../assets/background/bgplusemoji.png";
import redbox from "../../assets/icon/redbox.png";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header";
import PostBtnMydonate from "../../components/postbtnMydonate";
import PostBtnMypage from "../../components/postbtnMypage";

import ListItem from "../../components/mydonatelist";
import Book1 from "../../assets/bg/example.png";
import Book2 from "../../assets/bg/example2.png";

const randomRange = (min, max) => {
  const rand = Math.random();
  return min + Math.floor(rand * (max - min + 1));
};

const PostBg = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover; /* 배경 이미지를 화면에 꽉 채우도록 설정 */
  height: 860px; /* 화면 높이를 860px로 설정 */
  width: 380px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const generateRandomStyles = () => {
  const randomX = Math.random() * 100;
  const randomOffset = randomRange(-100, 100);
  const randomXEnd = randomX + randomOffset;
  const randomXEndYoyo = randomX + randomOffset / 2;
  const randomYoyoTime = randomRange(30000, 80000) / 100000;
  const randomYoyoY = randomYoyoTime * 100;
  const randomScale = Math.random();
  const fallDuration = randomRange(10, 30);
  return {
    randomX,
    randomXEnd,
    randomXEndYoyo,
    randomYoyoTime,
    randomYoyoY,
    randomScale,
    fallDuration,
  };
};

const StyledParagraph1 = styled.p`
  font-weight: 900;
  font-size: 30px;
  position: fixed;
  color: white;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80%;
  text-align: center;
`;
const StyledParagraph2 = styled.p`
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  position: fixed;
  color: white;
  bottom: ;
  z-index: 1;

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    src: url(./font/NotoSansKR-Thin.woff) format("woff"),
      url(./font/NotoSansKR-Thin.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    src: url(./font/NotoSansKR-Light.woff) format("woff"),
      url(./font/NotoSansKR-Light.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url(./font/NotoSansKR-Regular.woff) format("woff"),
      url(./font/NotoSansKR-Regular.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: url(../font/NotoSansKR-Medium.woff2) format("woff2"),
      url(../font/NotoSansKR-Medium.woff) format("woff"),
      url(../font/NotoSansKR-Medium.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url(./font/NotoSansKR-Bold.woff) format("woff"),
      url(./font/NotoSansKR-Bold.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 900;
    src: url(./font/NotoSansKR-Black.woff) format("woff"),
      url(./font/NotoSansKR-Black.otf) format("opentype");
  }
  left: 50%;
  transform: translateX(-50%);
  bottom: 70%;
  text-align: center;
`;
const StyledParagraph3 = styled.p`
  font-weight: 700;
  font-size: 16px;
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 66%;
  text-align: center;
`;
const StyledParagraph4 = styled.p`
  font-weight: 900;
  font-size: 12px;
  position: fixed;
  color: white;
  z-index: 1;

  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  text-align: center;
`;
const generateSnowflakes = () => {
  const snowflakes = [];

  for (let i = 1; i <= 200; i++) {
    const styles = generateRandomStyles();

    snowflakes.push({
      id: i,
      styles,
    });
  }

  return snowflakes;
};

const Snow = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  background: white; // Change the background color to black
  pointer-events: none;
  border-radius: 50%;

  ${({ id, styles }) => `
    &:nth-child(${id}) {
    opacity: ${Math.random()};
    transform: translate(${styles.randomX}vw, -10px) scale(${
    styles.randomScale
  });
    animation: fall-${id} ${styles.fallDuration}s -${
    Math.random() * 30
  }s linear infinite;
    }

    @keyframes fall-${id} {
    ${styles.randomYoyoTime * 100}% {
        transform: translate(${styles.randomXEnd}vw, ${
    styles.randomYoyoY
  }vh) scale(${styles.randomScale});
    }
    
    to {
        transform: translate(${styles.randomXEndYoyo}vw, 100vh) scale(${
    styles.randomScale
  });
    }
    }
`}
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;
const BoxImg = styled.div`
  position: fixed;
  bottom: 0;
  text-decoration: underline;
  z-index: 1;
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
  }
  img {
    width: 100%;
  }
`;

//const ListItem = ({pageTypeNormal, pageTypeDetail, name, school,subject,date,matching, imgSrc}) =>{

const Mydonation = () => {
  const arrs = [
    {
      name: "쎈 연산 5",
      school: "교과과정 : 초등 ",
      subject: "과목 : 수학",
      date: "등록일자 : 2024. 1. 7 ",
      matching: "매칭상태 : 매칭중",
      imgSrc: Book1,
    },
    {
      name: "수학의 정석",
      school: "교과과정 : 고등 ",
      subject: "과목 : 수학",
      date: "등록일자 : 2024. 1. 2 ",
      matching: "매칭상태 : 매칭완료",
      imgSrc: Book2,
    },
  ];
  const snowflakes = generateSnowflakes();

  return (
    <>
      <PostBg>
        {snowflakes.map((snowflake) => (
          <Snow
            key={snowflake.id}
            id={snowflake.id}
            styles={snowflake.styles}
          />
        ))}
        <Header />

        <StyledParagraph1>나의 기부 현황</StyledParagraph1>

        <ul>
          {arrs.map((arr, index) => (
            <ListItem
              pageTypeNormal={true}
              pageTypeDetail="PostOtherUser"
              name={arr.name}
              school={arr.school}
              subject={arr.subject}
              date={arr.date}
              matching={arr.matching}
              imgSrc={arr.imgSrc}
              key={index}
            />
          ))}
        </ul>
      </PostBg>
    </>
  );
};

export default Mydonation;
