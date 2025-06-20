import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
  const amountInputId = useId;
  return (
    
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/80 text-md font-sans mb-2 inline-block'>{label}</label>
        <input 
        id={amountInputId}
        className='outline-none w-full bg-red-400 p-2 text-2xl text-teal-950 py-1.5'
        placeholder='Amount'
        disabled = {amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        type="number" 
        />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/80 text-md font-sans mb-2 w-full'>Currency Type</p>
            <select 
            className='rounded-lg px-2 py-2 bg-gray-500 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled ={currencyDisable}
            >
                {currencyOptions.map((currency)=>(
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
            </select>
        </div>
    </div>
  );
}

export default InputBox