import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Layout/Header";
import InputField from "../../components/InputField";
import backgroundImage from "../../assets/background/background.png";
import { useNavigate } from "react-router-dom";

import "../../styles/agencysignup.css";

const AgencySignUp = () => {
const [email, setEmail] = useState("");
const [id, setId] = useState("");
const [password, setPassword] = useState("");
const [checkPassword, setCheckPassword] = useState("");
const [name, setName] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !id || !password || !checkPassword || !name) {
    alert("모든 필드를 채워주세요.");
    return;
    }

    if (password !== checkPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
    }

    const formData = {
    email: email,
    id: id,
    password: password,
    check_password: checkPassword,
    name: name,
    };

    try {
    const response = await axios.post("/signup", formData);
    console.log(response.data);
    navigate("/reciever/agencylogin");
    } catch (error) {
    console.error("회원가입 오류:", error);
    }
};

return (
    <div className="agencysignup-container">
    <Header></Header>
    <div className="agencysignup-header">
        <div>회원가입</div>
        <div>회원이 되어 기부를 경험해보세요.</div>
    </div>
    <form onSubmit={handleSubmit}>
        <InputField
        label="이메일"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
        label="아이디"
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        />
        <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        />
        <InputField
        label="이름/기관명"
        type="text"
        placeholder="기관명"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button className="signup-submit" type="submit">
        회원가입
        </button>
    </form>
    </div>
);
};

export default AgencySignUp;
