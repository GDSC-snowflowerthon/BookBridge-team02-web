import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostBtngo from '../../components/postbtngo';
import Header from '../../components/Layout/Header';
import { common } from '../../styles/common';
const StyledParagraph1 = styled.p`
font-weight: 900;
font-size: 30px;
position: fixed;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 65%;
text-align: center;
`;

const Textboxdesign = styled.p`

position: fixed;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 30%;
text-align: center;
font-size: 64px;
padding: 10px;
width: 80%; 
`;

const Textboxdesign1 = styled.p`

position: fixed;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 20%;
text-align: center;
font-size: 64px;
padding: 10px;
width: 80%; 
`;

const StyledParagraph3 = styled.p`
font-weight: 900;
font-size: 28px;
position: fixed;
color: white;
bottom: 0;
z-index: 1;
left: 10%;
transform: translateX(-50%);
bottom: 55%;
text-align: center;
`;

const Hello = () => {
const [editableText, setEditableText] = useState('오. 텍스트박스 안되네');

const handleTextChange = (event) => {
    setEditableText(event.target.textContent);
};

return (
    <>
    <Header />
    <StyledParagraph1>
        출판사의 이름과
        <br />
        참고서의 이름을
        <br />
        등록해주세요.
    </StyledParagraph1>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>   
    <br/>
    <Textboxdesign>
        <input
        type="text"
        placeholder="출판사의 이름을 등록해주세요."
        className="input-field"
        />
    </Textboxdesign>
    <Textboxdesign1>
        <input
        type="text"
        placeholder="참고서의 이름을 등록해주세요."
        className="input-field"
        />
    </Textboxdesign1>
    <StyledParagraph3>
    </StyledParagraph3>
    <PostBtngo value="다음으로" type="button" to="/donate/process3" />
    </>
);
};

export default Hello;
