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
  const { id } = queryString.parse(search);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/book/${id}`);
      const book = response.data;
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생", error);
    }
  };

  fetchData();

  //book.____
  return (
    <div className="bookinfo-container">
      <Header></Header>
      <div className="header-info">정보 세부보기</div>
      <img className="bookImg" src="https://via.placeholder.com/189x231" />
      <div>
        <div className="bookTitle">쎈 연산 / 수학</div>
        <div>
          <table className="bookTable">
            <tbody>
              <tr>
                <td>학년</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>출판사</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>필기 도구</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>필기 상태</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>보존 상태</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>닉네임</td>
                <td>aaa</td>
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
