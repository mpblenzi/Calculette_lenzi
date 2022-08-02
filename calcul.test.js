const calcul = require("./script")

describe(
    'test calcul', ()=>{
        test('test 1 + 2 = 3', () => {
            expect(calcul(1+2)).toBe(3)
        })
    }   
)