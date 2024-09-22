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

  return (
    <>
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
      />
      <Output onClick={clear} />
      <Footer />
    </>
  );
}

export default App;
