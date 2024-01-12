import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header";
import "../../styles/bookinfo.css";
/*
{
		
		"title" : String,
		"subject" : String,
		"curriculum" : String,
		"publisher" : String,
		"image" : Multipartfile,
		"preseration_status" : String,
		"created_at" : datetime,
	}
*/
const BookInfo = () => {
  const { search } = useLocation();
  const { book_id } = queryString.parse(search);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/book/${book_id}`);
      const book = response.data;
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생", error);
    }
  };

  fetchData();

  return (
    <div className="bookinfo-container">
      <Header></Header>
      <div className="header-info">정보 세부보기</div>
      <img className="bookImg" alt="bookImg" src={book.outsideImageUrl} />
      <div>
        <div className="bookTitle">
          {book.title} / {book.subject}
        </div>
        <div>
          <table className="bookTable">
            <tbody>
              <tr>
                <td>학년</td>
                <td>{book.curriculum}</td>
              </tr>
              <tr>
                <td>출판사</td>
                <td>{book.publisher}</td>
              </tr>
              <tr>
                <td>필기 도구</td>
                <td>{book.writingToolList.join(" ")}</td>
              </tr>
              <tr>
                <td>필기 상태</td>
                <td>{book.writingDegree}</td>
              </tr>
              <tr>
                <td>보존 상태</td>
                <td>{book.preservationStatusList.join(" ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Link to="/reciever/finish">
          <button className="applyButton">신청하기</button>
        </Link>
      </div>
    </div>
  );
};

export default BookInfo;
