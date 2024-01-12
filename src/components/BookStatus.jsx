import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const BookStatus = ({
  id,
  title,
  curriculum,
  subject,
  publisher,
  outsideImageUrl,
}) => {
  const handleClick = () => {
    navigate("/reciever/bookinfo", {
      state: {
        title: title,
        curriculum: curriculum,
        subject: subject,
        publisher: publisher,
        outsideImageUrl: outsideImageUrl,
      },
    });
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={handleClick}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          width: 353,
          height: 120,
          background: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <div
          style={{
            marginRight: "10px",
          }}
        >
          <img
            src={outsideImageUrl}
            alt="Book"
            style={{
              width: "84px",
              height: "111px",
              borderRadius: "5%",
            }}
          />
        </div>

        {/* Text container */}
        <div style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "5px", fontWeight: "700" }}>
            책 제목 : {title}
          </div>
          <div style={{ marginBottom: "5px", fontWeight: "700" }}>
            학년 : {curriculum}
          </div>
          <div style={{ marginBottom: "5px", fontWeight: "700" }}>
            과목 : {subject}
          </div>
          <div style={{ fontWeight: "700" }}>출판사 : {publisher}</div>
        </div>
      </div>
    </div>
  );
};

export default BookStatus;
