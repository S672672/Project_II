// Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-200 border border-gray-300 rounded-md">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={input}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(
          (button, index) => (
            <button
              key={index}
              className="p-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400"
              onClick={() => {
                button === '=' ? handleCalculate() : handleButtonClick(button);
              }}
            >
              {button}
            </button>
          )
        )}
        <button
          className="col-span-2 p-2 bg-red-500 rounded-md text-white hover:bg-red-600"
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
