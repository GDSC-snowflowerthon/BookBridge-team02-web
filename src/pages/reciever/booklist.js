import React, { useState, useEffect } from "react";
import BookStatus from "../../components/BookStatus";
import axios from "axios";
import Header from "../../components/Layout/Header";
import "../../styles/booklist.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [curriculum, setCurriculum] = useState("모든 교육 과정");
  const [subject, setSubject] = useState("모든 과목");
  const fetchBooks = () => {
    const params = {
      subject: subject,
      curriculum: curriculum,
    };

    axios
      .get("", { params }) //주소 넣기
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchBooks();
  }, [subject, curriculum]);

  const handleCurriculumChange = (event) => {
    setCurriculum(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="booklist-container">
      <Header></Header>
      <div className="header-list">목록</div>
      <div className="select">
        <select
          className="select-curriculum"
          onChange={handleCurriculumChange}
          value={curriculum}
        >
          <option value="모든 교육 과정">모든 교육 과정</option>
          <option value="초등">초등</option>
          <option value="중등">중등</option>
          <option value="고등">고등</option>
        </select>
        <select
          className="select-subject"
          onChange={handleSubjectChange}
          value={subject}
        >
          <option value="모든 과목">모든 과목</option>
          <option value="국어">국어</option>
          <option value="영어">영어</option>
          <option value="수학">수학</option>
          <option value="사회">사회</option>
          <option value="과학">과학</option>
          <option value="한국사">한국사</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div className="booklist">
        {books.map((book) => (
          <BookStatus
            key={book.id}
            id={book.id}
            title={book.title}
            curriculum={book.curriculum}
            subject={book.subject}
            publisher={book.publisher}
            imageUrl={book.url}
          />
        ))}
        <BookStatus></BookStatus>
        <BookStatus></BookStatus>
        <BookStatus></BookStatus>
        <BookStatus></BookStatus>
        <BookStatus></BookStatus>
      </div>
    </div>
  );
};

export default BookList;
