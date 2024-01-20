import { useState } from "react";
import "./App.css";
import { InputBox } from "./Components";
import { useCurrencyinfo } from "./hooks";

function App() {
  const [amount, setAmount] = useState<number>(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedamt] = useState(0);

  const currencyinfo = useCurrencyinfo(from);

  const currencyOption = Object.keys(currencyinfo);
  // console.log(currencyOption);

  function swap() {
    // Save the current values in temporary variables
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;
    const tempConvertedAmt = convertedAmt;

    // Set the values after swapping
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(tempConvertedAmt);
    setConvertedamt(tempAmount);
  }
  function convertCurrency() {
    setConvertedamt(() => amount * currencyinfo[to]);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                className=""
                Amount={amount}
                currencyOption={currencyOption}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => swap()}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                className=""
                Amount={convertedAmt}
                currencyOption={currencyOption}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
