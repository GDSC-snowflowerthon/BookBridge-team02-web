const InputField2 = ({ type, placeholder, value, onChange }) => (
  <div>
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
