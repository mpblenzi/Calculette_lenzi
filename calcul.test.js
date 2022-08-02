const calcul = require("./script")

describe(
    'test calcul', ()=>{
        test('test 1 + 2 = 3', () => {
            expect(calcul(1+2)).toBe(3)
        })
        test('test 1 - 2 = -1', () => {
            expect(calcul(1-2)).toBe(-1)
        })
        test('test 1 * 2 = 2', () => {
            expect(calcul(1*2)).toBe(2)
        })
        test('test 2 / 2 = 1', () => {
            expect(calcul(2/2)).toBe(1)
        })
    }   
)