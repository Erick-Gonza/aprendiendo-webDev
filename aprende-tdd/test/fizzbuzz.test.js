import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // This test is redundant
  // it('Should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('Should trhow error if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('Should trhow a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })

  it('Should trhow a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow(/number/)
  })

  it('Should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('Should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('Should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('Should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('Should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(4)).toBe(4)
  })

  // This test is covered in the algoritm
  // it('Should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('Should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('Should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })

  it('Should return "fizzbuzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
