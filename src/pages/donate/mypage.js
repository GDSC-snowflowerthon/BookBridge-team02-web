import React from 'react'
import styled from '@emotion/styled'
import backgroundImage from '../../assets/background/bgplusemoji.png'
import { Link } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import { common } from '../../styles/common'
import { css } from '@emotion/react'
import myicon from '../../assets/icon/myicon.png'

const randomRange = (min, max) => {
const rand = Math.random();
return min + Math.floor(rand * (max - min + 1));
};
const TextNextToImage1 = styled.div`
margin-left: 70px; /* 이미지와 텍스트 사이 여백 조정 */
margin-top: -40px; /* 적절한 여백 조정 */
color: black;
font-size: 14px;
font-weight: bold;
z-index: 3;

`;

const TextNextToImage2 = styled.div`
margin-left: 0;
margin-top: -38px;
color: black;
font-size: 14px;
font-weight: bold;
position: relative;
z-index: 3;

&::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #ccc;
    bottom: -5px; /* Adjust this value to change the position of the line */
    left: 0;
}
`;
const TextNextToImage3 = styled.div`
margin-left: 0px; /* 이미지와 텍스트 사이 여백 조정 */
margin-top: -38px; /* 적절한 여백 조정 */
color: black;
font-size: 14px;
font-weight: bold;
position: relative;
z-index: 3;
&::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #ccc;
    bottom: -5px; /* Adjust this value to change the position of the line */
    left: 0;
}

`;
const TextNextToImage4 = styled.div`
margin-left: 0;
margin-top: -18px;
color: black;
font-size: 14px;
font-weight: bold;
position: relative;
z-index: 3;
`;
const TextNextToImage5 = styled.div`
margin-left: 0;
margin-top: -18px;
color: black;
font-size: 14px;
font-weight: bold;
position: relative;
z-index: 3;
`;
const SnowmanImageBox = styled.div`
width:50px;
height:50px;
overflow:hidden;
display: flex;
align-items: center;
justify-content: center;
border-radius:8px;
margin-top: -20px; /* 적절한 여백 조정 */
img{
    height:100%;
}
`
const WhiteBox1 = styled.div`
background-color: white;
width: 260px;
height: 10px; /* 높이 조절 */
padding: 30px;
border-radius: 10px;
margin-top: 120px;
margin-left: auto;
margin-right: auto;
z-index: 2;
`;

const WhiteBox2 = styled.div`
background-color: white;
width: 260px;
height: 50px; /* 높이 조절 */
padding: 30px;
border-radius: 10px;
margin-top: 50px;
margin-left: auto;
margin-right: auto;
z-index: 2;
`;

const WhiteBox3 = styled.div`
background-color: white;
width: 260px;
height: 50px; /* 높이 조절 */
padding: 30px;
border-radius: 10px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
z-index: 2;
`;

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
    position:fixed;
    color: white;
    z-index:1;
    left:50%;
        transform:translateX(-50%);
        bottom:80%;
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
background: white;  // Change the background color to black
pointer-events: none;
border-radius: 50%;

${({ id, styles }) => `
    &:nth-child(${id}) {
    opacity: ${Math.random()};
    transform: translate(${styles.randomX}vw, -10px) scale(${styles.randomScale});
    animation: fall-${id} ${styles.fallDuration}s -${Math.random() * 30}s linear infinite;
    }

    @keyframes fall-${id} {
    ${styles.randomYoyoTime * 100}% {
        transform: translate(${styles.randomXEnd}vw, ${styles.randomYoyoY}vh) scale(${styles.randomScale});
    }
    
    to {
        transform: translate(${styles.randomXEndYoyo}vw, 100vh) scale(${styles.randomScale});
    }
    }
`}
`;


//const ListItem = ({pageTypeNormal, pageTypeDetail, name, school,subject,date,matching, imgSrc}) =>{

const Hello = ({pageTypeDetail}) => {
const snowflakes = generateSnowflakes();

        

    return (
    <>
        <PostBg>
        {snowflakes.map((snowflake) => (
        <Snow key={snowflake.id} id={snowflake.id} styles={snowflake.styles} />
        ))}
        <Header/>
        <StyledParagraph1>마이페이지</StyledParagraph1>
        <WhiteBox1>
        <SnowmanImageBox>
        <img src={myicon}/>
        </SnowmanImageBox>
        <TextNextToImage1>
            김눈꽃
            <br/>
            기부한 책의 수 : 6권

        </TextNextToImage1>
        </WhiteBox1>
        <WhiteBox2>
        <TextNextToImage2>
            <p>계정</p>
        </TextNextToImage2>
        <TextNextToImage4>
            <br/>
            아이디  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dongguk1234
            <br/>
            이메일 변경
            <br/>
            비밀번호 변경
        </TextNextToImage4>

        </WhiteBox2>
        <WhiteBox3>
        <TextNextToImage3>
            <p>기부</p>
        </TextNextToImage3>
        <TextNextToImage5>
            <br/>
            나의 기부 현황
            <br/>
            참고서 기부하기
        </TextNextToImage5>

        </WhiteBox3>
        </PostBg>

    </>
    );
};

export default Hello;