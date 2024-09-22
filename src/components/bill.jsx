const Bill = ({ billInput, setBillInput }) => {
  const change = (e) => {
    setBillInput(e.target.value);
  };

  return (
    <>
      <div>
        <label>Bill</label>
        <input
          value={billInput}
          onChange={change}
          type="number"
          placeholder="0"
          dir="rtl"
        />
      </div>
    </>
  );
};

export default Bill;
