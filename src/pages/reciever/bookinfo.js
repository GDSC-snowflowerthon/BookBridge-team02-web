import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header";
import "../../styles/bookinfo.css";

const BookInfo = () => {
  const location = useLocation();
  const { title, curriculum, subject, publisher, outsideImageUrl } =
    location.state || {};
  return (
    <div className="bookinfo-container">
      <Header></Header>
      <div className="header-info">정보 세부보기</div>
      <img className="bookImg" alt="bookImg" src={outsideImageUrl} />
      <div>
        <div className="bookTitle">
          {title} / {subject}
        </div>
        <div>
          <table className="bookTable">
            <tbody>
              <tr>
                <td>교과 과정</td>
                <td>{curriculum}</td>
              </tr>
              <tr>
                <td>출판사</td>
                <td>{publisher}</td>
              </tr>
              <tr>
                <td>필기 도구</td>
                <td>연필/샤프</td>
              </tr>
              <tr>
                <td>필기 상태</td>
                <td>깨끗함</td>
              </tr>
              <tr>
                <td>보존 상태</td>
                <td>겉표지 깨끗함</td>
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
