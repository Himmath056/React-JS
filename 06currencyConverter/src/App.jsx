import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyinfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat p-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mb-6">Currency Converter</h1>

      <div className="w-full max-w-4xl   flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/30 rounded-lg p-4 backdrop-blur-sm">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 h-80 lg:h-auto flex justify-center items-center p-2">
          <img
            src="https://images.pexels.com/photos/27517094/pexels-photo-27517094/free-photo-of-tea-a-fresh-start-to-the-day.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Currency background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col p-4 h-80 lg:h-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="w-full"
          >
            <div className="w-full  mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5 mb-2">
                       <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
