import { describe, expect, it } from 'vitest'
import { wrapping, wrapped } from '../src/gifts'

describe('gifts', () => {
  it('Should be a function', () => {
    expect(wrapping).toBeTypeOf('function')
  })

  it('Should trhow an error if no parameter has provided', () => {
    expect(() => wrapping()).toThrow('Parameter is required')
  })

  it('Should trhow an error if no parameter has provided', () => {
    expect(() => wrapping('test')).toThrow('Parameter of type array is required')
  })

  it('Should throw an error if the provided parameter is not an array of strings', () => {
    expect(() => wrapping([1, 2, 3, 4])).toThrow('All elements of the provided array must be strings')
  })

  // it('Debera tener la variable envuelto, del tipo array', () => {
  //   expect(wrapped([1, 2, 3]))
  // })
})
