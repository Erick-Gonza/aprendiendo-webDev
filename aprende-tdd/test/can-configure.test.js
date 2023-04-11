import { describe, it, expect } from 'vitest'

function canConfigure (from, to) {
  // if (from === undefined) throw new Error('From is required')
  if (typeof from !== 'string') throw new Error('From is not a string')

  if (typeof to !== 'string') throw new Error('To is not a string')

  const isSameLenth = from.length === to.length
  if (isSameLenth) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedToLetter = transformations[fromLetter]
    if (storedToLetter && storedToLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}

describe('canReconfigure', () => {
  // it('Should be a function', () => {
  //   expect(canConfigure).toBeTypeOf('function')
  // })

  it('Should trhow if first parameter is missing', () => {
    expect(() => canConfigure()).toThrow()
  })

  it('Should throw if first parameter is not a string', () => {
    expect(() => canConfigure(2)).toThrow()
  })

  it('Should throw if second parameter is not a string', () => {
    expect(() => canConfigure('a')).toThrow()
  })

  it('Should return a boolean', () => {
    expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('Should return false if strings provided has different length', () => {
    expect(canConfigure('abc', 'de')).toBe(false)
  })

  it('Should return false if strings provided has different length even with same unique letters ', () => {
    expect(canConfigure('aab', 'ab')).toBe(false)
  })

  it('Should return false if strings provided has different length', () => {
    expect(canConfigure('abc', 'ddd')).toBe(false)
  })

  it('Should return false if strings provided has different order', () => {
    expect(canConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
