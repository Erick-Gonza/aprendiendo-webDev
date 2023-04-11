import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operators = ['+', '-', '*', '/']
export const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = (op) => () => {
    setValue(value.concat(op))
  }

  return (
    <section>
      <h2>Calculator</h2>
      <input value={value} readOnly />
      <div role='grid'>
        {
        rows.map((row, idx) =>
          <div role='row' key={idx}>
            {row.map((number) =>
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>)}
          </div>)
        }

        {
          operators.map((operator) =>
            <div key={operator}>
              <button onClick={createHandleClick(operator)}>{operator}</button>
            </div>)
        }
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </section>
  )
}

export default Calculator
