import { Link } from "react-router-dom";
import "../../styles/finish.css";
import giftBoxImg from "../../assets/giftbox_blue.png";

const Finish = () => {
  return (
    <div className="finish-container">
      <h1 className="header-finish">신청 완료!</h1>
      <div className="finish-subHeader">
        사용자에게 메일로 정보가 발송됩니다.
      </div>
      <Link to="/reciever/booklist">
        <button className="toListBtn">목록으로</button>
      </Link>
      <img className="giftboxImg" src={giftBoxImg} alt="Gift Box" />
    </div>
  );
};

export default Finish;
