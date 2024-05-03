import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

const number_exponents = 5;
const arrayExp = [...Array(number_exponents).keys()]

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => count !== 0 && setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const multiplicationOutput = (num, expo) => {
    let stringOutput = "";
    for (let i = 0; i < expo; i++) { stringOutput += `${num} * ` }
    return stringOutput.substring(0, stringOutput.length - 3);
  };

  // console.log(multiplicationOutput(2, 4));

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {
          arrayExp.map(exponent_num => {
            return (
                <Exponent key={exponent_num} num={count} exponent={exponent_num + 2} multiplicationOutput={multiplicationOutput} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
