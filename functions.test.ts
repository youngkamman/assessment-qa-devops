const {shuffleArray} = require('./utils')
let testData = [23,24,26,27,76,89]
    

describe('shuffleArray should', () => {
    test ('shuffleArray should return the same lenght as testData', () => {
        expect(shuffleArray(testData)).toHaveLength(6)
         
})
test ('shuffleArray should return  numbers ', () => {
    let array = shuffleArray(testData)
    expect(array).not.toBeNaN()

})
})



console.log(shuffleArray(testData))