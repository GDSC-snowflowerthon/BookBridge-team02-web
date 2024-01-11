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
            src="https://s3-alpha-sig.figma.com/img/c54a/1351/4286101ef7df1a35618160721cb591b7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCo8nJaSnnWCAi0uB9NeDiwTL2pAoq0rlxap0udoPObSNJCfKBz0H51oXxTtSTWUrWIJeFOpBsWscvlO4uYwgPh5XSfvBA5LEivFI5rZzm1cvnNn2DmYwCwn0q~bzYnDWfp5HkY0mb91bvg0poTg6WoAS1RzWq5e8Htdh3AOCtnr16tHZVDWRPDoGGTH-BZSpstemjYWyfIThQU~M534thUOha5~-TjpqX-8r~IFgpBMdFfV-ArNGFea44Gk7pRm1eTTfZmqdf0rJCaVv7llKG2op87bQ1iT02ygtZBwVZlzv55erjAp7zFz2fGFD2PlGEp6upQxyrjVr8gNDySE~g__"
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
