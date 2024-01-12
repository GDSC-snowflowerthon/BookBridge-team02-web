import React, { useState } from "react";
import styled from "@emotion/styled";
import PostBtngo from "../../components/postbtngo";
import Header from "../../components/Layout/Header";
import Process from "./process/Process";

const checkBoxList = [
  "매우 깨끗함",
  "깨끗함",
  "보통",
  "필기 있음",
  "필기량 많음",
  "연필/샤프",
  "볼펜/형광펜/색연필",
  "겉표지 깨끗함",
  "이름(서명) 없음",
  "페이지 변색 없음",
  "페이지 훼손 없음",
];

const CheckboxContainer = styled.div`
  margin: 120px auto 20px;
  text-align: center;
  margin-bottom: 55px; /* Adjusted margin */
  bottom: 45%;
`;

const CheckboxItem = styled.div`
  margin-bottom: 20px;
  text-align: auto;
  bottom: 85%;
`;

const CheckboxLabel = styled.label`
  display: block;
  font-size: 18px; /* Example font size */
  color: #333; /* Example color */
  margin-bottom: 10px; /* Example margin-bottom */
  bottom: 85%;
`;

const StyledParagraph0 = styled.p`
  font-weight: 900;
  font-size: 25px;
  position: fixed;
  white-space: nowrap;
  color: black;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80%;
  text-align: center;
`;

const StyledParagraph1 = styled.p`
  font-weight: 900;
  font-size: 25px;
  position: fixed;
  white-space: nowrap;
  color: black;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 49%;
  text-align: center;
`;

const StyledParagraph2 = styled.p`
  font-weight: 900;
  font-size: 25px;
  position: fixed;
  white-space: nowrap;
  color: black;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32%;
  text-align: center;
`;

const Process5 = ({ setStep, info, setInfo }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemName, section) => {
    const newCheckedItems = { ...checkedItems };
    const onNextStep = () => {
      setStep((prev) => prev + 1);
    };
    if (section === "어느정도") {
      // For the first section, allow only one checkbox to be checked
      newCheckedItems["어느정도"] = itemName;
    } else {
      // For other sections, allow multiple checkboxes to be checked
      newCheckedItems[section] = newCheckedItems[section] || [];
      const index = newCheckedItems[section].indexOf(itemName);

      if (index === -1) {
        // If not checked, add to the array
        newCheckedItems[section].push(itemName);
      } else {
        // If checked, remove from the array
        newCheckedItems[section].splice(index, 1);
      }
    }

    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <Header />
      <CheckboxContainer>
        <StyledParagraph0>어느정도 필기하셨나요?</StyledParagraph0>
        <div>
          {checkBoxList.slice(0, 5).map((item) => (
            <CheckboxItem key={item}>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={checkedItems["어느정도"] === item}
                  onChange={() => handleCheckboxChange(item, "어느정도")}
                />
                {item}
              </CheckboxLabel>
            </CheckboxItem>
          ))}
        </div>
        <StyledParagraph1>무엇으로 필기하셨나요?</StyledParagraph1>
        <br />
        <br />
        <br />
        <div>
          {checkBoxList.slice(5, 7).map((item) => (
            <CheckboxItem key={item}>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={
                    checkedItems["무엇으로"] &&
                    checkedItems["무엇으로"].includes(item)
                  }
                  onChange={() => handleCheckboxChange(item, "무엇으로")}
                />
                {item}
              </CheckboxLabel>
            </CheckboxItem>
          ))}
        </div>
        <StyledParagraph2>책의 상태는 어떤가요?</StyledParagraph2>
        <br />
        <br />
        <br />
        <div>
          {checkBoxList.slice(7).map((item) => (
            <CheckboxItem key={item}>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={
                    checkedItems["책의 상태"] &&
                    checkedItems["책의 상태"].includes(item)
                  }
                  onChange={() => handleCheckboxChange(item, "책의 상태")}
                />
                {item}
              </CheckboxLabel>
            </CheckboxItem>
          ))}
        </div>
      </CheckboxContainer>
      <PostBtngo value="다음으로" type="button" onClick={onNextStep} />
    </>
  );
};

export default Process5;
