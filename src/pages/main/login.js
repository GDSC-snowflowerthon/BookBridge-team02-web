import React from 'react'
import styled from '@emotion/styled'
import { common } from '../../styles/common'
import backgroundImage from '../../assets/background/background.png'
import redbox from '../../assets/icon/redbox.png'
import { css } from '@emotion/react';
import { Link } from 'react-router-dom'
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



const StyledParagraph1 = styled.p`
    font-weight: 900;
    font-size: 48px;
    position:fixed;
    color: black;
	z-index:1;
	left:50%;
		transform:translateX(-50%);
		bottom:65%;
        text-align: center;
    
`;
const StyledParagraph2 = styled.p`
font-weight: 900;
font-size: 12px;
position:fixed;
color: black;
z-index:1;
left:50%;
    transform:translateX(-50%);
    bottom:68%;
    text-align: center;

	
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 100;
        src: url(./font/NotoSansKR-Thin.woff) format('woff'),
            url(./font/NotoSansKR-Thin.otf) format('opentype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 300;
        src: url(./font/NotoSansKR-Light.woff) format('woff'),
            url(./font/NotoSansKR-Light.otf) format('opentype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        src: url(./font/NotoSansKR-Regular.woff) format('woff'),
            url(./font/NotoSansKR-Regular.otf) format('opentype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        src: url(../font/NotoSansKR-Medium.woff2) format('woff2'),
            url(../font/NotoSansKR-Medium.woff) format('woff'),
            url(../font/NotoSansKR-Medium.otf) format('opentype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        src: url(./font/NotoSansKR-Bold.woff) format('woff'),
            url(./font/NotoSansKR-Bold.otf) format('opentype');
    }
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        src: url(./font/NotoSansKR-Black.woff) format('woff'),
            url(./font/NotoSansKR-Black.otf) format('opentype');
    }
`;
const StyledParagraph3 = styled.p`
    font-weight: 900;
    font-size: 12px;
    position:fixed;
    color: white;
	bottom:0;
	z-index:1;
		left:50%;
		transform:translateX(-50%);
		bottom:50%;
        text-align: center;
`;
const StyledParagraph4 = styled.p`
    font-weight: 900;
    font-size: 12px;
    position:fixed;
    color: white;
	z-index:1;
	
		left:50%;
		transform:translateX(-50%);
		bottom:5%;
        text-align: center;
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
	position:fixed;
	bottom:0;
	text-decoration:underline;
	z-index:1;
	p{
		position:absolute;
		left:50%;
		transform:translateX(-50%);
		bottom:10%;
	}
	img{
		width:100%;
	}
`;


const Hello = () => {
        

    return (
    <>
        <Header/>
        <StyledParagraph1>BookBride</StyledParagraph1>
        <StyledParagraph2>나의 끝이, 누군가의 시작이 될 수 있게</StyledParagraph2>
        <StyledParagraph3>
            화면을 클릭하여 아이들의
            <br />
            새 출발을 함께 해 주세요
        </StyledParagraph3>
        <StyledParagraph4>화면을 클릭해주세요</StyledParagraph4>
        <BoxImg>
            <img src={redbox} />
        </BoxImg>

    </>
    );
};

export default Hello;