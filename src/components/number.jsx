const Number = ({ numberInput, setNumberInput, error, onBlur }) => {
  const change = (e) => {
    setNumberInput(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <label>
            <span>Number of People</span>
            {error && <span>{error}</span>}
          </label>
        </div>
        <input
          onBlur={onBlur}
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
