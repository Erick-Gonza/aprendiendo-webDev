function fizzbuzz (number) {
  if (typeof number !== 'number') throw new Error('Parameter provider must be a number')
  if (Number.isNaN(number)) throw new Error('Parameter provider must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }

  let output = ''
  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}

export { fizzbuzz }
