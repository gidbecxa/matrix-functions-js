
anArray = Array.of(1, 3, 5)
//(3) [1, 3, 5]
let newArray = Array(3).fill(anArray)
//undefined
newArray
//(3) [Array(3), Array(3), Array(3)]
//0: (3) [1, 3, 5]
//1: (3) [1, 3, 5]
//2: (3) [1, 3, 5]

function multiplyMatrix (multiplier, anArray) {
    const x11 = multiplier * anArray[0][0];
    const x12 = multiplier * anArray[0][1];
    const x13 = multiplier * anArray[0][2];
    const x21 = multiplier * anArray[1][0];
    const x22 = multiplier * anArray[1][1];
    const x23 = multiplier * anArray[1][2];
    const x31 = multiplier * anArray[2][0];
    const x32 = multiplier * anArray[2][1];
    const x33 = multiplier * anArray[2][2];
    const resultantArray = [[x11, x12, x13], [x21, x22, x23], [x31, x32, x33]];
    return resultantArray;
}
//undefined
multiplyMatrix(4, newArray)
//(3) [Array(3), Array(3), Array(3)]0: (3) [4, 12, 20]1: (3) [4, 12, 20]2: (3) [4, 12, 20]length: 3[[Prototype]]: Array(0)
