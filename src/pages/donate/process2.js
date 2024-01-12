import React, { useState } from "react";
import styled from "@emotion/styled";
import PostBtngo from "../../components/postbtngo";
import Header from "../../components/Layout/Header";
import { QueryClient, QueryClientProvider } from "react-query";

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

const Process2 = () => {
  const [publisher, setPublisher] = useState("");
  const [bookName, setBookName] = useState("");
  return (
    <>
      <Header />
      <div style={{ marginBottom: "100px" }}>
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
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
      />
      <Textboxdesign1
        type="text"
        placeholder="참고서의 이름을 등록해주세요."
        className="input-field"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />

      <StyledParagraph3></StyledParagraph3>
      {/* <PostBtngo value="다음으로" type="button" to="/donate/process3" /> */}
      <PostBtngo value="다음으로" type="button" to="/donate/process3" />
    </>
  );
};

export default Process2;
