import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Layout/Header";
import BookStatus from "../../components/BookStatus";

const SearchBookList = () => {
  const location = useLocation();
  const books = location.state?.books;
  return (
    <div className="booklist-container">
      <Header></Header>
      <div className="header-list">목록</div>
      {books.map((book) => (
        <BookStatus
          id={book.bookId}
          title={book.title}
          curriculum={book.curriculum}
          subject={book.subject}
          publisher={book.publisher}
          imageUrl={book.outsideImageUrl}
        />
      ))}
      <BookStatus></BookStatus>
      <BookStatus></BookStatus>
      <BookStatus></BookStatus>
      <BookStatus></BookStatus>
      <BookStatus></BookStatus>
    </div>
  );
};

export default SearchBookList;
