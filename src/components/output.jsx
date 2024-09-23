const Output = ({ onClick, total, tip }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <p>
              Tip Amount
              <br />
              <span> / person</span>
            </p>
            <p>${tip ? tip() : "0.00"}</p>
          </div>
          <div>
            <p>
              Total
              <br />
              <span> / person</span>
            </p>
            <p>${total ? total() : "0.00"}</p>
          </div>
        </div>
        <button onClick={onClick}>Reset</button>
      </div>
    </>
  );
};

export default Output;
