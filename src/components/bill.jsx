const Bill = ({ billInput, setBillInput }) => {
  const change = (e) => {
    setBillInput(e.target.value);
  };

  return (
    <>
      <label className="flex flex-col gap-1">
        Bill
        <input
          className="placeholder:text-grayishCyan focus:outline-strongCyan bg-veryLightGrayishCyan caret-strongCyan cursor-pointer rounded-md p-2 focus:outline focus:outline-2"
          value={billInput}
          onChange={change}
          type="number"
          placeholder="0"
          dir="rtl"
        />
      </label>
    </>
  );
};

export default Bill;
