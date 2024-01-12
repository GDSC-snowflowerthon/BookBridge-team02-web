import { Link } from "react-router-dom";
const BookStatus = ({
  id,
  title,
  curriculum,
  subject,
  publisher,
  imageUrl,
}) => {
  return (
    <Link
      to={`/reciever/bookinfo?id=${id}`}
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
            src={imageUrl}
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
          <div style={{ marginBottom: "5px" }}>책 제목 : {title}</div>
          <div style={{ marginBottom: "5px" }}>학년 : {curriculum}</div>
          <div style={{ marginBottom: "5px" }}>과목 : {subject}</div>
          <div>출판사 : {publisher}</div>
        </div>
      </div>
    </Link>
  );
};

export default BookStatus;
