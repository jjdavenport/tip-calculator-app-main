const Output = ({ onClick }) => {
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
            <p>$0.00</p>
          </div>
          <div>
            <p>
              Total
              <br />
              <span> / person</span>
            </p>
            <p>$0.00</p>
          </div>
        </div>
        <button onClick={onClick}>Reset</button>
      </div>
    </>
  );
};

export default Output;
