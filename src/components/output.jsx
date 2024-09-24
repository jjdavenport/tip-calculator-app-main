const Output = ({ onClick, total, tip, isDisabled }) => {
  return (
    <>
      <section className="~md/lg:~px-8/10 flex flex-col gap-6 rounded-2xl bg-veryDarkCyan p-6 md:w-1/2 md:justify-between md:p-8">
        <div className="md:gap-8S flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lightGrayishCyan">Tip Amount</span>
              <span className="text-lightGrayishCyan text-opacity-40">
                / person
              </span>
            </div>
            <span className="text-3xl text-strongCyan md:text-5xl">
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
            <span className="text-3xl text-strongCyan md:text-5xl">
              ${total ? total() : "0.00"}
            </span>
          </div>
        </div>
        <button
          className={`${isDisabled ? "cursor-not-allowed bg-opacity-20" : "cursor-pointer hover:bg-lightGrayishCyan"} w-full rounded-md bg-strongCyan p-2 text-2xl uppercase text-veryDarkCyan duration-300 ease-in-out`}
          onClick={onClick}
        >
          Reset
        </button>
      </section>
    </>
  );
};

export default Output;
