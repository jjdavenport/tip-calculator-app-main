const Bill = ({ billInput, setBillInput }) => {
  const change = (e) => {
    setBillInput(e.target.value);
  };

  return (
    <>
      <label className="flex flex-col">
        Bill
        <input
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
