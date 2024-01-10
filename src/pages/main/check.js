import React from 'react'
import styled from '@emotion/styled'
import { common } from '../../styles/common'
import backgroundImage from '../../assets/background/background.png'
import donate3d from '../../assets/icon/donate3d.png'
import Header from '../../components/Layout/Header'
const randomRange = (min, max) => {
const rand = Math.random();
return min + Math.floor(rand * (max - min + 1));
};

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
    z-index: -1;
    
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


const Hello = () => {
const snowflakes = generateSnowflakes();

return (
    <>
    {snowflakes.map((snowflake) => (
        <Snow key={snowflake.id} id={snowflake.id} styles={snowflake.styles} />
    ))}
        <Header/>
        <PostBg>

    </PostBg>
    </>

);
};

export default Hello;
