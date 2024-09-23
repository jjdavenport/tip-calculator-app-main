import { useState } from "react";

const Select = ({
  selectInput,
  setSelectInput,
  customInput,
  setCustomInput,
  check,
}) => {
  const [hover, setHover] = useState(null);

  const change = (e) => {
    const value = e.target.value;
    setCustomInput(value);
    setSelectInput("");
    check();
    console.log(change);
  };

  const click = (val) => {
    setSelectInput(val);
    setCustomInput("");
    check();
    console.log(click);
  };

  const button = (val) => `
    ${
      selectInput === val
        ? "bg-strongCyan text-veryDarkCyan"
        : hover === val
          ? "bg-lightGrayishCyan text-veryDarkCyan"
          : "bg-veryDarkCyan text-white"
    }
    active:bg-strongCyan active:text-veryDarkCyan
    rounded-md duration-300 ease-in-out
  `;

  return (
    <>
      <label className="flex flex-col gap-1">
        Select Tip %
        <div className="grid grid-cols-3 grid-rows-2 gap-1">
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
            className="bg-veryLightGrayishCyan placeholder:text-grayishCyan focus:outline-strongCyan caret-strongCyan cursor-pointer rounded-md p-2 focus:outline focus:outline-2"
            value={customInput}
            onChange={change}
            type="number"
            placeholder="Custom"
          />
        </div>
      </label>
    </>
  );
};

export default Select;
