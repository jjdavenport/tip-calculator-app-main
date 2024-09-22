const Number = ({ numberInput, setNumberInput }) => {
  const change = (e) => {
    setNumberInput(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <label>Number of People</label>
          <p></p>
        </div>
        <input
          value={numberInput}
          onChange={change}
          type="number"
          placeholder="0"
          dir="rtl"
        />
      </div>
    </>
  );
};

export default Number;
