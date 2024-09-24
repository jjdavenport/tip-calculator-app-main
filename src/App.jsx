import Bill from "./components/bill";
import Select from "./components/select";
import Number from "./components/number";
import Footer from "./components/footer";
import Output from "./components/output";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [billInput, setBillInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [error, setError] = useState(false);
  const disable = !billInput && !numberInput && !selectInput && !customInput;
  const desktop = useMediaQuery({ minWidth: 768 });

  const clear = () => {
    setBillInput("");
    setNumberInput("");
    setSelectInput("");
    setCustomInput("");
    setError("");
  };

  const check = () => {
    const number = parseFloat(numberInput);
    if (number === 0) {
      setError("Can't be zero");
    } else {
      setError("");
    }
  };

  const tip = () => {
    const people = parseFloat(numberInput);
    if (billInput && people > 0) {
      const bill = parseFloat(billInput);
      const tipPercentage = customInput ? customInput / 100 : selectInput / 100;
      const tipAmount = bill * tipPercentage;
      const totalPerPerson = tipAmount / people;
      return totalPerPerson.toFixed(2);
    }
    return "0.00";
  };

  const total = () => {
    const people = parseFloat(numberInput);
    if (billInput && people > 0) {
      const bill = parseFloat(billInput);
      const tipPercentage = customInput ? customInput / 100 : selectInput / 100;
      const tipAmount = bill * tipPercentage;
      const totalPerPerson = (bill + tipAmount) / people;
      return totalPerPerson.toFixed(2);
    }
    return "0.00";
  };

  return (
    <>
      {desktop ? (
        <div className="bg-logoDesktop flex h-full min-h-screen flex-col justify-between bg-lightGrayishCyan bg-logo bg-no-repeat font-custom">
          <div className="~md/lg:~px-1/16 flex flex-1 items-center justify-center">
            <main className="~gap-6/12 ~px-4/10 flex h-fit max-w-screen-lg flex-row rounded-3xl bg-white p-10 font-bold">
              <section className="flex w-1/2 flex-col gap-8">
                <Bill billInput={billInput} setBillInput={setBillInput} />
                <Select
                  selectInput={selectInput}
                  setSelectInput={setSelectInput}
                  customInput={customInput}
                  setCustomInput={setCustomInput}
                />
                <Number
                  error={error}
                  numberInput={numberInput}
                  setNumberInput={setNumberInput}
                  onBlur={check}
                />
              </section>
              <Output
                isDisabled={disable}
                tip={tip}
                total={total}
                onClick={clear}
              />
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex h-full min-h-screen flex-col bg-lightGrayishCyan bg-logo bg-logoMobile bg-no-repeat pt-32 font-custom">
          <main className="flex flex-1 flex-col gap-6 rounded-t-3xl bg-white p-4 font-bold">
            <Bill billInput={billInput} setBillInput={setBillInput} />
            <Select
              selectInput={selectInput}
              setSelectInput={setSelectInput}
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <Number
              error={error}
              numberInput={numberInput}
              setNumberInput={setNumberInput}
              onBlur={check}
            />
            <Output
              isDisabled={disable}
              tip={tip}
              total={total}
              onClick={clear}
            />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
