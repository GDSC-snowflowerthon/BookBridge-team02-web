import "../styles/inputfield.css";

const InputField2 = ({ type, placeholder, value, onChange }) => (
  <div className="textinputfield-container">
    <input
      style={{ width: "80%" }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField2;
