import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostBtngo from '../../components/postbtngo';
import Header from '../../components/Layout/Header';
import {  QueryClient, QueryClientProvider } from 'react-query';

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

const Textboxdesign = styled.input`
position: fixed;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 30%;
text-align: center;
font-size: 16px;
padding: 10px;
width: 80%;
`;

const Textboxdesign1 = styled.input`
position: fixed;
color: black;
z-index: 1;
left: 50%;
transform: translateX(-50%);
bottom: 20%;
text-align: center;
font-size: 16px;
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

const queryClient = new QueryClient();

const Process2 = ({setStep, info, setInfo}) => {
    const [editableText, setEditableText] = useState('오. 텍스트박스 안되네');


    const onNextStep = () => {
        setStep(prev=>prev+1);
    }

// const { mutate: setPublisherMutation } = useMutation(
//     async (newPublisher) => {
//     // 비동기 작업을 수행하고 상태를 업데이트하는 로직
//     setPublisher(newPublisher);
//     },
//     {
//     onSuccess: () => {
//         console.log('Publisher updated successfully!');
//     },
//     }
// );

// const { mutate: setBookNameMutation } = useMutation(
//     async (newBookName) => {
//     // 비동기 작업을 수행하고 상태를 업데이트하는 로직
//     setBookName(newBookName);
//     },
//     {
//     onSuccess: () => {
//         console.log('Book name updated successfully!');
//     },
//     }
// );

return (
    <>
    <Header />
    <div style={{marginBottom:"100px"}}>
        <StyledParagraph1>
            출판사의 이름과
            <br />
            참고서의 이름을
            <br />
            등록해주세요.
        </StyledParagraph1>
    </div>

    <Textboxdesign
        type="text"
        placeholder="출판사의 이름을 등록해주세요."
        className="input-field"
        value={info.publisher}
        onChange={(e) => setInfo({ ...info, publisher: e.target.value })}
    />
    <Textboxdesign1
        type="text"
        placeholder="참고서의 이름을 등록해주세요."
        className="input-field"
        value={info.bookName}
        onChange={(e) => setInfo({ ...info, bookName: e.target.value })}
    />

    <StyledParagraph3></StyledParagraph3>
    {/* <PostBtngo value="다음으로" type="button" to="/donate/process3" /> */}
    <PostBtngo value="다음으로" type="button" onClick={onNextStep} />
    </>
);
};

export default Process2;
