import { useState } from 'react'
import './App.css'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.jsx'
function App() {
  const [amount , setAmount] = useState(0);
  const [from ,setFrom] = useState("usd")
  const [to ,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  //use custom hook
  const currencyInfo = useCurrencyInfo(from); // pass currency data
  const options = Object.keys(currencyInfo)
  // swap button and data swap
  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }
  return (
    <>
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   >
      
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'><h2 className='p-2 mb-2 text-2xl text-yellow-200 shadow-lg font-black bg-slate-500 rounded-md'>AB Currency Convertor</h2>
        <form action=""
        onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}
        >
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setAmount(amount)
              }
              onAmountChange={(amount)=>setAmount(amount)}
              selectCurrency={from}
              />

            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2 translate-x-1 -translate-y-1/3 border-2 font-sans text-xl border-white rounded-md bg-blue-500 text-white px-5 py-1'
              onClick={swap}
              >
                  swap
              </button>

            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setAmount(currency)
              }
              selectCurrency={to}
              amountDisable
              
              />

            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-yellow-300 font-semibold text-2xl px-4 py-3 rounded-lg shadow-lg'>
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
        </form>
          </div>  
      </div>
        
        </div>      
    </>
  )
}

export default App
