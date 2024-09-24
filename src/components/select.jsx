import { useState } from "react";

const Select = ({
  selectInput,
  setSelectInput,
  customInput,
  setCustomInput,
}) => {
  const [hover, setHover] = useState(null);

  const change = (e) => {
    const value = e.target.value;
    setCustomInput(value);
    setSelectInput("");
  };

  const click = (val) => {
    setSelectInput(val);
    setCustomInput("");
  };

  const button = (val) => `
    ${
      selectInput === val
        ? "bg-strongCyan text-veryDarkCyan hover:bg-lightGrayishCyan hover:text-veryDarkCyan"
        : hover === val
          ? "bg-lightGrayishCyan text-veryDarkCyan"
          : "bg-veryDarkCyan text-white"
    }
    rounded-md duration-300 ease-in-out
  `;

  return (
    <>
      <label className="flex flex-col gap-2 text-grayishCyan">
        Select Tip %
        <div className="grid grid-cols-2 grid-rows-3 gap-4 text-2xl md:grid-cols-3 md:grid-rows-2">
          <button
            onMouseEnter={() => setHover(5)}
            onMouseLeave={() => setHover(null)}
            className={button(5)}
            onClick={() => click(5)}
          >
            5%
          </button>
          <button
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
            className={button(10)}
            onClick={() => click(10)}
          >
            10%
          </button>
          <button
            onMouseEnter={() => setHover(15)}
            onMouseLeave={() => setHover(null)}
            className={button(15)}
            onClick={() => click(15)}
          >
            15%
          </button>
          <button
            onMouseEnter={() => setHover(25)}
            onMouseLeave={() => setHover(null)}
            className={button(25)}
            onClick={() => click(25)}
          >
            25%
          </button>
          <button
            onMouseEnter={() => setHover(50)}
            onMouseLeave={() => setHover(null)}
            className={button(50)}
            onClick={() => click(50)}
          >
            50%
          </button>
          <input
            className="cursor-pointer rounded-md bg-veryLightGrayishCyan p-2 text-veryDarkCyan caret-strongCyan placeholder:text-darkGrayishCyan focus:outline focus:outline-2 focus:outline-strongCyan"
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
