const Number = ({ numberInput, setNumberInput, error, onBlur }) => {
  const change = (e) => {
    setNumberInput(e.target.value);
  };
  return (
    <>
      <label className="flex flex-col gap-2 text-grayishCyan">
        <div className="flex justify-between">
          <span>Number of People</span>
          {error && <span className="text-red-500">{error}</span>}
        </div>
        <input
          className={`${error ? "outline outline-2 outline-red-500" : "outline-none"} bg-person bg-input cursor-pointer rounded-md bg-veryLightGrayishCyan bg-no-repeat p-2 text-2xl text-veryDarkCyan caret-strongCyan placeholder:text-darkGrayishCyan focus:outline focus:outline-2 focus:outline-strongCyan`}
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
