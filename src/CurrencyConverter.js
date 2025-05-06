// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from 'react'
// import { useEffect } from "react/cjs/react.production.min";

export default function App() {
  const [output, setOutput] = useState(0)
  const [amount, setAmount] = useState(100)
  const [fromCurr, setFromCurr] = useState('USD')
  const [toCurr, setToCurr] = useState('EUR')
  const [isLoading, setIsLoading] = useState(false)

  function handleOutput(val) {
    setOutput(val)
  }
  function handleFromCurr(val) {
    setFromCurr(() => val)
  }
  function handleToCurr(val) {
    setToCurr(() => val)
  }
  function handleAmount(value) {
    setAmount(() => value)
  }

  useEffect(
    function compute() {
      const convert = async function (amt, from, to) {
        try {
          setIsLoading(true)

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`
          )

          const data = await res.json()

          const result = data.rates[`${to}`].toFixed(2)

          handleOutput(result)
        } catch (err) {
          alert(`Error message: ${err.message} ❌`)
        } finally {
          setIsLoading(false)
        }
      }
      if (fromCurr === toCurr) {
        return setOutput(amount)
      }
      convert(amount, fromCurr, toCurr)
    },
    [amount, fromCurr, toCurr]
  )

  return (
    <div>
      <input
        type='text'
        value={amount}
        onChange={(e) => handleAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurr}
        onChange={(e) => handleFromCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select
        value={toCurr}
        onChange={(e) => handleToCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <p>
        {output} {toCurr}
      </p>
    </div>
  )
}
