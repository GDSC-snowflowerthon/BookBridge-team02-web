import React, { useState } from "react";
import styled from "@emotion/styled";
import PostBtngo from "../../components/postbtngo";
import Header from "../../components/Layout/Header";
import { common } from "../../styles/common";

const StyledParagraph1 = styled.p`
  font-weight: 900;
  font-size: 30px;
  position: fixed;
  white-space: nowrap;
  color: black;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80%;
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
  bottom: 71%;
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
  bottom: 63%;
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
  bottom: 55%;
  text-align: center;
`;
const StyledParagraph6 = styled.p`
  font-weight: 900;
  font-size: 28px;
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1;
  left: 10%;
  transform: translateX(-50%);
  bottom: 47%;
  text-align: center;
`;
const StyledParagraph7 = styled.p`
  font-weight: 900;
  font-size: 28px;
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1;
  left: 10%;
  transform: translateX(-50%);
  bottom: 39%;
  text-align: center;
`;
const StyledParagraph8 = styled.p`
  font-weight: 900;
  font-size: 28px;
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1;
  left: 10%;
  transform: translateX(-50%);
  bottom: 31%;
  text-align: center;
`;

const StyledParagraph9 = styled.p`
  font-weight: 900;
  font-size: 28px;
  position: fixed;
  color: white;
  bottom: 0;
  z-index: 1;
  left: 10%;
  transform: translateX(-50%);
  bottom: 23%;
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
  background: ${(props) =>
    props.isSelected
      ? common.colors.blue
      : "none"}; /* Dynamic background based on isSelected */
  position: absolute;
  bottom: 5%;
  height: 55px;
`;

const Process4 = ({ setStep, info, setInfo }) => {
  console.log(info);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setInfo({ ...info, subject: buttonName });
  };
  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      <StyledParagraph1>과목을 등록해주세요.</StyledParagraph1>
      <StyledParagraph3>
        <EditableButton
          isSelected={selectedButton === "국어"}
          onClick={() => handleButtonClick("국어")}
        >
          국어
        </EditableButton>
      </StyledParagraph3>
      <StyledParagraph4>
        <EditableButton
          isSelected={selectedButton === "영어"}
          onClick={() => handleButtonClick("영어")}
        >
          영어
        </EditableButton>
      </StyledParagraph4>
      <StyledParagraph5>
        <EditableButton
          isSelected={selectedButton === "수학"}
          onClick={() => handleButtonClick("수학")}
        >
          수학
        </EditableButton>
      </StyledParagraph5>
      <StyledParagraph6>
        <EditableButton
          isSelected={selectedButton === "사회"}
          onClick={() => handleButtonClick("사회")}
        >
          사회
        </EditableButton>
      </StyledParagraph6>
      <StyledParagraph7>
        <EditableButton
          isSelected={selectedButton === "과학"}
          onClick={() => handleButtonClick("과학")}
        >
          과학
        </EditableButton>
      </StyledParagraph7>
      <StyledParagraph8>
        <EditableButton
          isSelected={selectedButton === "한국사"}
          onClick={() => handleButtonClick("한국사")}
        >
          한국사
        </EditableButton>
      </StyledParagraph8>
      <StyledParagraph9>
        <EditableButton
          isSelected={selectedButton === "기타"}
          onClick={() => handleButtonClick("기타")}
        >
          기타
        </EditableButton>
      </StyledParagraph9>

      <PostBtngo
        value="다음으로"
        type="button"
        to="/donate/process5"
        onClick={onNextStep}
      />
    </>
  );
};

export default Process4;
