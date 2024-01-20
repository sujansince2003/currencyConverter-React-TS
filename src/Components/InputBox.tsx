import { useId } from "react";
interface InputBoxProps {
  label: string;
  className: string;
  Amount: number;
  onAmountChange: () => string;
  onCurrencyChange: () => string;
  currencyOption: string[];
  selectCurrency: string;
  amountDisable?: boolean;
}
function InputBox({
  label,
  className = "",
  Amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
}: InputBoxProps) {
  const AmountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={AmountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={AmountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={Amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={amountDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption?.map((curOpt) => (
            <option key={curOpt} value={curOpt}>
              {curOpt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
