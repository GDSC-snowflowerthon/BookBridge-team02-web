import React, { useState } from 'react';
import styled from '@emotion/styled'
import { common } from '../../styles/common'
import backgroundImage from '../../assets/background/background.png'
import donate3d from '../../assets/icon/donate3d.png'
import Header from '../../components/Layout/Header'
import PostBtn2 from '../../components/postbtn2'

const randomRange = (min, max) => {
const rand = Math.random();
return min + Math.floor(rand * (max - min + 1));
};

const Button = styled.button`
display: block;
width: 320px;
color: ${common.colors.black};
font-weight: 700;
font-size: ${common.fontSize.fz20};
border-radius: 10px;
border: 2px solid ${common.colors.white};
cursor: pointer;
text-decoration: none;
background: ${({ isActive }) => (isActive ? common.colors.black : 'none')};
color: ${({ isActive }) => (isActive ? common.colors.white : common.colors.black)};
position: absolute;
transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background 0.3s ease-in-out; /* 수정된 부분: 테두리 색상 전환 효과를 추가 */
&:hover {
    color: ${common.colors.black};
}
&:focus {
    border-color: ${common.colors.black}; /* 추가된 부분: 클릭 시 테두리 색상 변경 */
}
`;



const PostBg = styled.div`
background: url(${backgroundImage}) no-repeat center center fixed;
background-size: cover;
height: 876px;
width: 390px;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
z-index: 1;
`;

const StyledParagraph3 = styled.p`
font-weight: 900;
font-size: 28px;
position: fixed;
color: white;
bottom: 0;
z-index: 1;
left: 27%;
transform: translateX(-50%);
bottom: 65%;
text-align: center;
`;

const StyledParagraph4 = styled.p`
font-weight: 900;
font-size: 12px;
position: fixed;
color: white;
z-index: 1;
left: 28%;
transform: translateX(-50%);
bottom: 65%;
text-align: center;
`;

const StyledParagraph5 = styled.p`
font-weight: 900;
font-size: 12px;
position: fixed;
color: white;
z-index: 1;
left: 8%;
transform: translateX(-50%);
bottom: 60%;
text-align: center;
`;

const StyledParagraph7 = styled.p`
font-weight: 900;
font-size: 12px;
position: fixed;
color: white;
z-index: 1;
left: 8%;
transform: translateX(-50%);
bottom: 50%;
text-align: center;
`;

const StyledParagraph8 = styled.p`
font-weight: 900;
font-size: 12px;
position: fixed;
color: white;
z-index: 1;
left: 8%;
transform: translateX(-50%);
bottom: 40%;
text-align: center;
`;

const StyledParagraph9 = styled.p`
font-weight: 900;
font-size: 12px;
position: fixed;
color: white;
z-index: 1;
left: 20%;
transform: translateX(-50%);
bottom: 20%;
text-align: center;
`;

const StyledParagraph6 = styled.p`
font-weight: 700;
font-size: 12px;
color: white;
`;

const StyledParagraph10 = styled.p`
font-weight: 700;
font-size: 12px;
color: black;
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
background: white;
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
const [activeButtons, setActiveButtons] = useState([]);
const snowflakes = generateSnowflakes();

const handleButtonClick = (buttonId) => {
    const updatedButtons = [...activeButtons];

    if (updatedButtons.includes(buttonId)) {
    // If button is already active, remove it
    updatedButtons.splice(updatedButtons.indexOf(buttonId), 1);
    } else {
    // If button is not active, add it
    updatedButtons.push(buttonId);
    }

    setActiveButtons(updatedButtons);
};


return (
    <>
    <PostBg>
        {snowflakes.map((snowflake) => (
        <Snow key={snowflake.id} id={snowflake.id} styles={snowflake.styles} />
        ))}
        <Header />
        <StyledParagraph3>약관 동의하기</StyledParagraph3>
        <StyledParagraph4>다음과 같은 정보에 동의해주세요.</StyledParagraph4>
        <StyledParagraph5>
        <Button
            onClick={() => handleButtonClick(1)}
            isActive={activeButtons.includes(1)}
        >
            <StyledParagraph6>
            본 서비스는 대한민국 교육부가 고시한
            <br />
            제 7차 교육과정에 해당하는 참고서만 받습니다. (2022~)
            </StyledParagraph6>
        </Button>
        </StyledParagraph5>
        <StyledParagraph7>
        <Button
            onClick={() => handleButtonClick(2)}
            isActive={activeButtons.includes(2)}
        >
            <StyledParagraph6>
            새로운 시작을 하려고 하는 학생이 다시 사용할 예정입니다.
            <br />
            기부할 참고서는 답지가 포함되어있는 참고서여야 합니다.
            </StyledParagraph6>
        </Button>
        </StyledParagraph7>
        <StyledParagraph8>
        <Button
            onClick={() => handleButtonClick(3)}
            isActive={activeButtons.includes(3)}
        >
            <StyledParagraph6>
            기부할 참고서는 훼손의 정도가 심하지 않아야 합니다.
            <br />
            ex : 찢어짐, 파손됨 !
            </StyledParagraph6>
        </Button>
        </StyledParagraph8>
        <PostBtn2 value='다음으로' type='button' to='/login' />
    </PostBg>
    </>
);
};

export default Hello;
