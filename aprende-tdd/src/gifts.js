const gifts = ['cat', 'game', 'socks']

function wrapping (gifts) {
  if (typeof gifts === 'undefined') throw new Error('Parameter is required')
  if (typeof gifts !== 'object') throw new Error('Parameter of type array is required')
  if (gifts.some((element) => typeof element !== 'string')) throw new Error('All elements of the provided array must be strings')

  return gifts
}

const wrapped = wrapping(gifts)

export { wrapping, wrapped }
