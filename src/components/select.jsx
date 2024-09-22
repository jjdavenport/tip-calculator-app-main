const Select = ({ selectInput, setSelectInput }) => {
  const change = (e) => {
    setSelectInput(e.target.value);
  };

  const click = (val) => {
    setSelectInput(val);
  };

  return (
    <>
      <div>
        <label>Select Tip %</label>
        <div className="grid grid-cols-3 grid-rows-3">
          <button
            className={selectInput === 5 ? "bg-black" : "bg-white"}
            onClick={() => click(5)}
          >
            5%
          </button>
          <button
            className={selectInput === 10 ? "bg-black" : "bg-white"}
            onClick={() => click(10)}
          >
            10%
          </button>
          <button
            className={selectInput === 15 ? "bg-black" : "bg-white"}
            onClick={() => click(15)}
          >
            15%
          </button>
          <button
            className={selectInput === 25 ? "bg-black" : "bg-white"}
            onClick={() => click(25)}
          >
            25%
          </button>
          <button
            className={selectInput === 50 ? "bg-black" : "bg-white"}
            onClick={() => click(50)}
          >
            50%
          </button>
          <input
            value={selectInput}
            onChange={change}
            type="number"
            placeholder="Custom"
            dir="rtl"
          />
        </div>
      </div>
    </>
  );
};

export default Select;
