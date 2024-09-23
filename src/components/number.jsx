const Number = ({ numberInput, setNumberInput, error, onBlur }) => {
  const change = (e) => {
    setNumberInput(e.target.value);
  };
  return (
    <>
      <label className="flex flex-col">
        <div className="flex justify-between">
          <span>Number of People</span>
          {error && <span>{error}</span>}
        </div>
        <input
          onBlur={onBlur}
          value={numberInput}
          onChange={change}
          type="number"
          placeholder="0"
          dir="rtl"
        />
      </label>
    </>
  );
};

export default Number;
