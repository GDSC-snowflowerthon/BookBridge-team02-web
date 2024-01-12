import "../styles/inputfield.css";

const InputField2 = ({ type, placeholder, value, onChange }) => (
  <div className="textinputfield-container">
    <input
      style={{
        width: "80%",
        height: "60px",
        border: "solid 1px",
        borderRadius: "20px",
        padding: "20px",
        fontSize: "20px",
      }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField2;
