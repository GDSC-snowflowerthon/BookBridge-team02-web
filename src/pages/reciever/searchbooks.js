import { useState } from "react";
import "../../components/InputField2";
import InputField2 from "../../components/InputField2";
import "../../components/Layout/Header";
import Header from "../../components/Layout/Header";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";

const SearchBooks = () => {
  const navigate = useNavigate;
  const [publisher, setPublisher] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `/book?title=${title}&publisher=${publisher}`
      );
      console.log(response.data);
      navigate("/reciever/agencylogin");
    } catch (error) {
      console.error("불러올 수 없음 :", error);
    }
  };
  return (
    <div>
      <Header></Header>
      <form style={{ color: "black" }} onSubmit={handleSubmit}>
        <InputField2
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        ></InputField2>
        <InputField2
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></InputField2>
        <button className="signup-submit" type="submit">
          검색하기
        </button>
      </form>
    </div>
  );
};

export default SearchBooks;
