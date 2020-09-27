import { greet } from './utils'

describe('greet', () => {
    it('should return greeting string without word', () => {
        expect(greet()).toBe('Hello world!')
    })

    it('should return greeting string with given word', () => {
        expect(greet('typescript')).toBe('Hello typescript!')
    })

    it('this test should be failed', () => {
        expect(greet('fail')).toBe('Hello success!')
    })
})