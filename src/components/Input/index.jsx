import "./Input.scss";

function Input({ type = "text", label, input, setInput }) {
  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="input-container">
        <input type={type} value={input} onChange={handleChange} />
        <label className={input && "filled"}>{label}</label>
      </div>
    </>
  );
}

export default Input;
