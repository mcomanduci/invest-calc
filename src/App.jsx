import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [input, setInput] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  const inputIsValid = input.duration > 0;

  function handleChange(e) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: +e.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInput={handleChange} />
      {inputIsValid ? (
        <Result inputs={input} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
