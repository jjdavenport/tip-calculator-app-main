const Output = ({ onClick, total, tip, isDisabled }) => {
  return (
    <>
      <section className="bg-veryDarkCyan flex flex-col gap-6 rounded-lg p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lightGrayishCyan">Tip Amount</span>
              <span className="text-lightGrayishCyan text-opacity-40">
                / person
              </span>
            </div>
            <span className="text-strongCyan text-3xl">
              ${tip ? tip() : "0.00"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lightGrayishCyan">Total</span>
              <span className="text-lightGrayishCyan text-opacity-40">
                / person
              </span>
            </div>
            <span className="text-strongCyan text-3xl">
              ${total ? total() : "0.00"}
            </span>
          </div>
        </div>
        <button
          className={`${isDisabled ? "cursor-not-allowed bg-opacity-20" : "cursor-pointer"} text-veryDarkCyan bg-strongCyan hover:bg-lightGrayishCyan w-full rounded-md p-2 text-2xl uppercase duration-300 ease-in-out`}
          onClick={onClick}
        >
          Reset
        </button>
      </section>
    </>
  );
};

export default Output;
