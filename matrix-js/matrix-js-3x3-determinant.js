matrixTwoSquare = Array.of([4, 6], [3, 8])
//(2) [Array(2), Array(2)]
matrixThreeSquare = Array.of([6, 1, 1], [4, -2, 5], [2, 8, 7])
//(3) [Array(3), Array(3), Array(3)]0: (3) [6, 1, 1]1: (3) [4, -2, 5]0: 41: -22: 5length: 3[[Prototype]]: Array(0)2: (3) [2, 8, 7]0: 21: 82: 7length: 3[[Prototype]]: Array(0)length: 3[[Prototype]]: Array(0)
function findMatrix33Det(arrayParam) {
    const productA1 = arrayParam[1][1] * arrayParam[2][2];
    const productA2 = arrayParam[1][2] * arrayParam[2][1];
    const subtractA = productA1 - productA2;
    const endValueA = +1 * arrayParam[0][0] * subtractA;
    const productB1 = arrayParam[1][0] * arrayParam[2][2];
    const productB2 = arrayParam[1][2] * arrayParam[2][0];
    const subtractB = productB1 - productB2;
    const endValueB = -1 * arrayParam[0][1] * subtractB;
    const productC1 = arrayParam[1][0] * arrayParam[2][1];
    const productC2 = arrayParam[1][1] * arrayParam[2][0];
    const subtractC = productC1 - productC2;
    const endValueC = +1 * arrayParam[0][2] * subtractC;
    const finalValue = endValueA + endValueB + endValueC;
}
//undefined
function findMatrix33Det(arrayParam) {
    const productA1 = arrayParam[1][1] * arrayParam[2][2];
    const productA2 = arrayParam[1][2] * arrayParam[2][1];
    const subtractA = productA1 - productA2;
    const endValueA = +1 * arrayParam[0][0] * subtractA;
    const productB1 = arrayParam[1][0] * arrayParam[2][2];
    const productB2 = arrayParam[1][2] * arrayParam[2][0];
    const subtractB = productB1 - productB2;
    const endValueB = -1 * arrayParam[0][1] * subtractB;
    const productC1 = arrayParam[1][0] * arrayParam[2][1];
    const productC2 = arrayParam[1][1] * arrayParam[2][0];
    const subtractC = productC1 - productC2;
    const endValueC = +1 * arrayParam[0][2] * subtractC;
    const finalValue = endValueA + endValueB + endValueC;
    return finalValue;
}
//undefined
findMatrix33Det(matrixThreeSquare)
//-306
