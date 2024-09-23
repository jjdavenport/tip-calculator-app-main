const Output = ({ onClick, total, tip, isDisabled }) => {
  return (
    <>
      <section className="bg-veryDarkCyan flex flex-col gap-2 rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span>Tip Amount</span>
              <span>/ person</span>
            </div>
            <span className="text-strongCyan">${tip ? tip() : "0.00"}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span>Total</span>
              <span>/ person</span>
            </div>
            <span className="text-strongCyan">${total ? total() : "0.00"}</span>
          </div>
        </div>
        <button
          className={`${isDisabled ? "bg-disabledBtn cursor-not-allowed" : "bg-strongCyan cursor-pointer"} text-veryDarkCyan w-full rounded-md p-1 uppercase`}
          onClick={onClick}
        >
          Reset
        </button>
      </section>
    </>
  );
};

export default Output;
