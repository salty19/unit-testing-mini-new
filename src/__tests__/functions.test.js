import { add } from '../utils/functions'

test('add returns the sum of two numbers', () => {
    expect(add(1,2)).toBe(3)
})

test('add handles string inputs that are numbers', () => {
    expect(add('3', '4')).toBe(7)
})

test('add returns Nan if they arent numbers', () => {
    expect(add('one', 'two')).toBeNan
})