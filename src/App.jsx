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

  const clear = () => {
    setBillInput("");
    setNumberInput("");
    setSelectInput("");
  };

  return (
    <>
      <Bill billInput={billInput} setBillInput={setBillInput} />
      <Select selectInput={selectInput} setSelectInput={setSelectInput} />
      <Number numberInput={numberInput} setNumberInput={setNumberInput} />
      <Output onClick={clear} />
      <Footer />
    </>
  );
}

export default App;
