const Bill = ({ billInput, setBillInput }) => {
  const change = (e) => {
    setBillInput(e.target.value);
  };

  return (
    <>
      <label className="flex flex-col gap-2 text-base text-grayishCyan">
        Bill
        <input
          className="bg-dollar bg-input cursor-pointer rounded-md bg-veryLightGrayishCyan bg-no-repeat p-2 text-2xl text-veryDarkCyan caret-strongCyan placeholder:text-darkGrayishCyan focus:outline focus:outline-2 focus:outline-strongCyan"
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
