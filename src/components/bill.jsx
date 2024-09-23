const Bill = ({ billInput, setBillInput }) => {
  const change = (e) => {
    setBillInput(e.target.value);
  };

  return (
    <>
      <label className="text-grayishCyan flex flex-col gap-2 text-base">
        Bill
        <input
          className="placeholder:text-darkGrayishCyan text-veryDarkCyan focus:outline-strongCyan bg-veryLightGrayishCyan caret-strongCyan cursor-pointer rounded-md p-2 text-2xl focus:outline focus:outline-2"
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
