import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostBtngo from '../../components/postbtngo';
import Header from '../../components/Layout/Header';

const checkBoxList = ['매우!!깨끗함', '깨끗함', '보통', '필기 있음', '필기량 많음', '연필/샤프', '볼펜/형광펜/색연필', '겉표지 깨끗함', '이름(서명) 없음', '페이지 변색 없음', '페이지 훼손 없음'];

const CheckboxContainer = styled.div`
margin: 160px auto 20px; 
text-align: center; 
`;

const CheckboxItem = styled.div`
margin-bottom: 30px; 
text-align: auto; 
`;

const CheckboxLabel = styled.label`
display: block;
font-size: 18px; /* Example font size */
color: #333; /* Example color */
margin-bottom: 10px; /* Example margin-bottom */
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
bottom: 77%;
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
bottom: 47%;
text-align: center;
`;
const Hello = () => {
const [checkedItems, setCheckedItems] = useState({});

const handleCheckboxChange = (itemName) => {
    setCheckedItems((prevItems) => ({
    ...prevItems,
    [itemName]: !prevItems[itemName],
    }));
};

return (
    <>
    <Header />
    <CheckboxContainer>
        <StyledParagraph0>
            필기한 흔적이 있나요?      
        </StyledParagraph0>
        <div>
        {checkBoxList.slice(0, 4).map((item) => (
            <CheckboxItem key={item}>
            <CheckboxLabel>
                <input
                type="checkbox"
                checked={checkedItems[item] || false}
                onChange={() => handleCheckboxChange(item)}
                />
                {item}
            </CheckboxLabel>
            </CheckboxItem>
        ))}
        </div>
        <StyledParagraph1>
            보존 상태는 어떤가요?        
        </StyledParagraph1>
        <br/>
        <br/>

        <div>
        {checkBoxList.slice(4).map((item) => (
            <CheckboxItem key={item}>
            <CheckboxLabel>
                <input
                type="checkbox"
                checked={checkedItems[item] || false}
                onChange={() => handleCheckboxChange(item)}
                />
                {item}
            </CheckboxLabel>
            </CheckboxItem>
        ))}
        </div>
    </CheckboxContainer>
    <PostBtngo value="다음으로" type="button" to="/donate/process6" />
    </>
);
};

export default Hello;
