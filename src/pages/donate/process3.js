import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostBtngo from '../../components/postbtngo';
import Header from '../../components/Layout/Header';
import { common } from '../../styles/common';

const StyledParagraph1 = styled.p`
font-weight: 900;
font-size: 30px;
position: fixed;
white-space: nowrap;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 75%;
text-align: center;
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
bottom: 60%;
text-align: center;
`;
const StyledParagraph4 = styled.p`
font-weight: 900;
font-size: 28px;
position: fixed;
color: white;
bottom: 0;
z-index: 1;
left: 10%;
transform: translateX(-50%);
bottom: 50%;
text-align: center;
`;
const StyledParagraph5 = styled.p`
font-weight: 900;
font-size: 28px;
position: fixed;
color: white;
bottom: 0;
z-index: 1;
left: 10%;
transform: translateX(-50%);
bottom: 40%;
text-align: center;
`;
const EditableButton = styled.button`
display: block;
width: 320px;
color: ${common.colors.black};
font-weight: 700;
font-size: ${common.fontSize.fz20};
border-radius: 20px;
border: 2px solid ${common.colors.black};
cursor: pointer;
background: ${(props) => (props.isSelected ? common.colors.blue : 'none')}; /* Dynamic background based on isSelected */
position: absolute;
bottom: 5%; 
height: 60px;
`;


const Process3 = ({setStep, info, setInfo}) => {
    console.log(info);
    const onNextStep = () => {
        setStep(prev=>prev+1);
    }
    const [selectedButton, setSelectedButton] = useState(null);
    // onChange={(e) => setInfo({ ...info, category: e.target.value })}
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInfo({ ...info, category: buttonName }); // Update the category in the info state

    
    };
return (
    <>
    <Header />
    <StyledParagraph1>
        책이 어느 교과과정에 
        <br />
        해당하나요?
    </StyledParagraph1>
    <StyledParagraph3>
    <EditableButton isSelected={selectedButton === '초등교육'} onClick={() => handleButtonClick('초등교육')}>
        초등교육
    </EditableButton>
    </StyledParagraph3>
    <StyledParagraph4>
    <EditableButton isSelected={selectedButton === '중등교육'} onClick={() => handleButtonClick('중등교육')}>
        중등교육
    </EditableButton>
    </StyledParagraph4>
    <StyledParagraph5>
    <EditableButton isSelected={selectedButton === '고등교육'} onClick={() => handleButtonClick('고등교육')}>
        고등교육
    </EditableButton>
    </StyledParagraph5>

    <PostBtngo value="다음으로" type="button" onClick={onNextStep} />
    </>
);
};

export default Process3;
