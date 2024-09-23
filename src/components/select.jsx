const Select = ({
  selectInput,
  setSelectInput,
  customInput,
  setCustomInput,
  check,
}) => {
  const change = (e) => {
    setCustomInput(e.target.value);
    setSelectInput("");
    check();
  };

  const click = (val) => {
    setSelectInput(val);
    setCustomInput("");
    check();
  };

  return (
    <>
      <label>
        Select Tip %
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          <button
            className={selectInput === 5 ? "bg-strongCyan" : "bg-veryDarkCyan"}
            onClick={() => click(5)}
          >
            5%
          </button>
          <button
            className={selectInput === 10 ? "bg-strongCyan" : "bg-veryDarkCyan"}
            onClick={() => click(10)}
          >
            10%
          </button>
          <button
            className={selectInput === 15 ? "bg-strongCyan" : "bg-veryDarkCyan"}
            onClick={() => click(15)}
          >
            15%
          </button>
          <button
            className={selectInput === 25 ? "bg-strongCyan" : "bg-veryDarkCyan"}
            onClick={() => click(25)}
          >
            25%
          </button>
          <button
            className={selectInput === 50 ? "bg-strongCyan" : "bg-veryDarkCyan"}
            onClick={() => click(50)}
          >
            50%
          </button>
          <input
            value={customInput}
            onChange={change}
            type="number"
            placeholder="Custom"
            dir="rtl"
          />
        </div>
      </label>
    </>
  );
};

export default Select;
