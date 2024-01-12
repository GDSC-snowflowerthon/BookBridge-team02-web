import "../styles/inputfield.css";

const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="inputfield-container">
    <div className="input-label">{label}</div>
    <input
      className="signup-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
