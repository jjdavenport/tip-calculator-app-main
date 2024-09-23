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
  };

  const check = () => {
    if (numberInput === "") {
      setError("Can't be zero");
    } else {
      setError("");
    }
  };

  const tip = () => {
    if (billInput && numberInput) {
      const bill = parseFloat(billInput);
      const people = parseFloat(numberInput);
      const tipPercentage = customInput ? customInput / 100 : selectInput / 100;
      const tipAmount = bill * tipPercentage;
      const totalPerPerson = tipAmount / people;
      return totalPerPerson.toFixed(2);
    }
    return "0.00";
  };

  const total = () => {
    if (billInput && numberInput) {
      const bill = parseFloat(billInput);
      const people = parseFloat(numberInput);
      const tipPercentage = customInput ? customInput / 100 : selectInput / 100;
      const tipAmount = bill * tipPercentage;
      const totalPerPerson = (bill + tipAmount) / people;
      return totalPerPerson.toFixed(2);
    }
    return "0.00";
  };

  return (
    <>
      <div className="bg-lightGrayishCyan flex h-full min-h-screen flex-col justify-between">
        <main className="flex flex-1 flex-col p-4 text-2xl">
          <Bill billInput={billInput} setBillInput={setBillInput} />
          <Select
            selectInput={selectInput}
            setSelectInput={setSelectInput}
            customInput={customInput}
            setCustomInput={setCustomInput}
            check={check}
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
