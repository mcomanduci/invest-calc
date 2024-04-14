function InputGroup({ text1, text2, name1, name2, handleChange }) {
  return (
    <div className="input-group">
      <p>
        <label htmlFor={name1}>{text1}</label>
        <input type="number" name={name1} id={name1} onChange={handleChange} required />
      </p>
      <p>
        <label htmlFor={name2}>{text2}</label>
        <input type="number" name={name2} id={name2} onChange={handleChange} required />
      </p>
    </div>
  );
}

export default InputGroup;
