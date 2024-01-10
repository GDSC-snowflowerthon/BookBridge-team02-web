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

const EditableButton = styled.button`
display: block;
width: 320px;
color: ${common.colors.black};
font-weight: 700;
font-size: ${common.fontSize.fz20};
border-radius: 10px;
border: 2px solid ${common.colors.black};
cursor: pointer;
text-decoration: none;
background: none;
position: absolute;
overflow: hidden; /* Hide overflowing content */
`;

const EditableContent = styled.div`
outline: none;
width: 100%;
height: 100%;
padding: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis; /* Show ellipsis (...) for overflow */
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
    <StyledParagraph3>
        <EditableButton contentEditable="true" onInput={handleTextChange}>
        <EditableContent>{editableText}</EditableContent>
        </EditableButton>
    </StyledParagraph3>
    <PostBtngo value="다음으로" type="button" to="/donate/process3" />
    </>
);
};

export default Hello;
