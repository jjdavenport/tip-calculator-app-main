const Number = ({ numberInput, setNumberInput, error, onBlur }) => {
  const change = (e) => {
    setNumberInput(e.target.value);
  };
  return (
    <>
      <label className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span>Number of People</span>
          {error && <span className="text-red-500">{error}</span>}
        </div>
        <input
          className="placeholder:text-grayishCyan focus:outline-strongCyan bg-veryLightGrayishCyan caret-strongCyan cursor-pointer rounded-md p-2 focus:outline focus:outline-2"
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
