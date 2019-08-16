import { addition } from  './simple_tests'

describe(`simple_tests.js`, () => {
    describe(`Addition tests: `, () => {
        test(`Is truthy: `, () => {
            expect(addition(5, 5)).toBeTruthy()
        })
        test(`Is Falsy: `, () => {
            expect(addition(0, 0)).toBeFalsy()
        })
        test(`Return correct addition: `, () => {
            expect(addition(1, 1)).toEqual(2)
        })
        test(`Return incorrect addition: `, () => {
            expect(addition(5, 3)).not.toEqual(5)
        })
        test(`Check if string is returned:`, () => {
            expect(addition(5, '2')).not.toEqual('52')
        })
    })
})
