import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostBtngo from '../../components/postbtngo';
import Header from '../../components/Layout/Header';
import { useNavigate } from 'react-router-dom';
import PostAddImg from '../../assets/icon/PostAddImg.png';
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

const PhotoBoxText = styled.div`
position: absolute;
width: 100%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
color: ${common.colors.white};
z-index: 1;

img {
    display: block;
    margin: 0 auto 5px;
}
`;

const InputPostFile = styled.input`
opacity: 0;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
cursor: pointer;
`;

const PhotoBox = styled.div`
margin: 0 auto;
width: 150px;
height: 180px;
color: ${common.colors.white};
position: relative;
overflow: hidden;
border-radius: 5px;
display: flex;
justify-content: center;
top: 200px; /* 변경된 부분 */
left: -90px; /* 새로 추가한 부분 */

&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}
`;

const PhotoBox1 = styled.div`
margin: 0 auto;
width: 150px;
height: 180px;
color: ${common.colors.white};
position: relative;
overflow: hidden;
border-radius: 5px;
display: flex;
justify-content: center;
top: 20px; /* 변경된 부분 */
left: 90px; /* 새로 추가한 부분 */

&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}
`;

const AddPhoto = () => {
const navigate = useNavigate();
const [imageSrc1, setImageSrc1] = useState(null);
const [imageSrc2, setImageSrc2] = useState(null);

const handleFileUpload1 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    setImageSrc1(reader.result);
    };
    reader.readAsDataURL(file);
};

const handleFileUpload2 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    setImageSrc2(reader.result);
    };
    reader.readAsDataURL(file);
};

return (
    <>
    <Header />
    <StyledParagraph1>책의 사진을 등록해주세요.</StyledParagraph1>
    <PhotoBox>
        <PhotoBoxText>
        <img src={PostAddImg} alt="plus" />
        겉표지 사진
        <InputPostFile type="file" accept="image/*" onChange={handleFileUpload1} />
        </PhotoBoxText>
        {imageSrc1 && <img src={imageSrc1} alt="사진1" />}
    </PhotoBox>

    <PhotoBox1>
        <PhotoBoxText>
        <img src={PostAddImg} alt="plus" />
        내부 사진
        <InputPostFile type="file" accept="image/*" onChange={handleFileUpload2} />
        </PhotoBoxText>
        {imageSrc2 && <img src={imageSrc2} alt="사진2" />}
    </PhotoBox1>

    <PostBtngo value="다음으로" type="button" to="/donate/done" />
    </>
);
};

export default AddPhoto;
