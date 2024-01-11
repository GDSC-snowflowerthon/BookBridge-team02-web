import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Layout/Header";
import InputField from "../../components/InputField";
import backgroundImage from "../../assets/background/background.png";
import { useNavigate } from "react-router-dom";

import "../../styles/agencysignup.css";

const AgencySignUp = () => {
  const [regNum, setRegNum] = useState("");
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
      registration_number: regNum,
    };

    try {
      const response = await axios.post("/signup", formData);
      console.log(response.data);
      navigate("/reciever/booklist");
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <div className="agencysignup-container">
      <Header></Header>
      <div className="agencysignup-header">
        <div>복지관 회원가입</div>
        <div>인증을 통해 참고서를 지원받으세요</div>
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          label="사업자등록번호"
          type="text"
          placeholder="사업자등록번호"
          value={regNum}
          onChange={(e) => setRegNum(e.target.value)}
        />
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
          label="기관명"
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
