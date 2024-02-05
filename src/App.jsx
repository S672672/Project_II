
import React, { useState } from 'react';

export default function Calculator () {
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
    <div className="max-w-xs mx-auto my-8 p-4 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
      <input
        type="text"
        className="w-full h-16 px-4 mb-4 text-3xl text-right bg-gray-900 border border-gray-700 rounded-md text-white"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(
          (button, index) => (
            <button
              key={index}
              className="p-4 bg-gray-700 rounded-md text-white hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => {
                button === '=' ? handleCalculate() : handleButtonClick(button);
              }}
            >
              {button}
            </button>
          )
        )}
        <button
          className="col-span-2 p-4 bg-red-600 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </div>
  );
};

