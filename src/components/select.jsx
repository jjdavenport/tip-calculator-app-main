const Select = () => {
  return (
    <>
      <div>
        <label>Select Tip %</label>
        <div>
          <button value="5">5%</button>
          <button value="10">10%</button>
          <button value="15">15%</button>
          <button value="25">25%</button>
          <button value="50">50%</button>
          <input type="number" placeholder="Custom" dir="rtl" />
        </div>
      </div>
    </>
  );
};

export default Select;
