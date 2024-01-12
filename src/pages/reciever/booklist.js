import React, { useState, useEffect } from "react";
import BookStatus from "../../components/BookStatus";
import axios from "axios";
import Header from "../../components/Layout/Header";
import "../../styles/booklist.css";

const BookList = () => {
  const [allBooks, setAllBooks] = useState([
    {
      outsideImageUrl: "/example1.png",
      title: "쎈",
      subject: "수학",
      curriculum: "초등",
      publisher: "한빛출판사",
    },
    {
      bookId: 9,
      outsideImageUrl: "/example2.jpg",
      title: "하이탑",
      subject: "과학",
      curriculum: "중등",
      publisher: "하이탑출판사",
    },
    {
      bookId: 8,
      outsideImageUrl: "/example3.jpg",
      title: "국치독",
      subject: "국어",
      curriculum: "고등",
      publisher: "유대종출판사",
    },
    {
      bookId: 7,
      outsideImageUrl: "/example4.jpg",
      title: "경선식영단어",
      subject: "영어",
      curriculum: "고등",
      publisher: "한빛출판사",
    },
    {
      bookId: 6,
      outsideImageUrl: "/example5.jpg",
      title: "삼국지",
      subject: "한국사",
      curriculum: "초등",
      publisher: "중국출판사",
    },
  ]);
  const [books, setBooks] = useState([]);
  const [curriculum, setCurriculum] = useState("모든 교육 과정");
  const [subject, setSubject] = useState("모든 과목");

  useEffect(() => {
    // 전체 책 목록에서 필터링
    let filteredBooks = allBooks;
    if (curriculum !== "모든 교육 과정") {
      filteredBooks = filteredBooks.filter(
        (book) => book.curriculum === curriculum
      );
    }
    if (subject !== "모든 과목") {
      filteredBooks = filteredBooks.filter((book) => book.subject === subject);
    }

    setBooks(filteredBooks);
  }, [curriculum, subject]); // curriculum과 subject가 바뀔 때마다 실행

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
            id={book.bookId}
            title={book.title}
            curriculum={book.curriculum}
            subject={book.subject}
            publisher={book.publisher}
            outsideImageUrl={book.outsideImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
