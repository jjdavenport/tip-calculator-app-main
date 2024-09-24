import Bill from "./components/bill";
import Select from "./components/select";
import Number from "./components/number";
import Footer from "./components/footer";
import Output from "./components/output";
import { useState } from "react";

function App() {
  const [billInput, setBillInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [error, setError] = useState(false);
  const disable = !billInput && !numberInput && !selectInput && !customInput;

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
    </>
  );
}

export default App;
