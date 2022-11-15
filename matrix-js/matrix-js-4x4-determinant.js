
function findMatrix44Det(arrayParam) {
    const productA1 = arrayParam[2][2] * arrayParam[3][3];
    const productA2 = arrayParam[2][3] * arrayParam[3][2];
    const subtractA = productA1 - productA2;
    const endValueA = +1 * arrayParam[1][1] * subtractA;
    const productB1 = arrayParam[2][1] * arrayParam[3][3];
    const productB2 = arrayParam[2][3] * arrayParam[3][1];
    const subtractB = productB1 - productB2;
    const endValueB = -1 * arrayParam[1][2] * subtractB;
    const productC1 = arrayParam[2][1] * arrayParam[3][2];
    const productC2 = arrayParam[2][2] * arrayParam[3][1];
    const subtractC = productC1 - productC2;
    const endValueC = +1 * arrayParam[1][3] * subtractC;
    const det1 = endValueA + endValueB + endValueC;
    const finalDet1 = +1 * arrayParam[0][0] * det1;

    const productD1 = arrayParam[2][2] * arrayParam[3][3];
    const productD2 = arrayParam[2][3] * arrayParam[3][2];
    const subtractD = productD1 - productD2;
    const endValueD = +1 * arrayParam[1][0] * subtractD;
    const productE1 = arrayParam[2][0] * arrayParam[3][3];
    const productE2 = arrayParam[2][3] * arrayParam[3][0];
    const subtractE = productE1 - productE2;
    const endValueE = -1 * arrayParam[1][2] * subtractE;
    const productF1 = arrayParam[2][0] * arrayParam[3][2];
    const productF2 = arrayParam[2][2] * arrayParam[3][0];
    const subtractF = productF1 - productF2;
    const endValueF = +1 * arrayParam[1][3] * subtractF;
    const det2 = endValueD + endValueE + endValueF;
    const finalDet2 = -1 * arrayParam[0][1] * det2;

    const productM1 = arrayParam[2][1] * arrayParam[3][3];
    const productM2 = arrayParam[2][3] * arrayParam[3][1];
    const subtractM = productM1 - productM2;
    const endValueM = +1 * arrayParam[1][0] * subtractM;
    const productN1 = arrayParam[2][0] * arrayParam[3][3];
    const productN2 = arrayParam[2][3] * arrayParam[3][0];
    const subtractN = productN1 - productN2;
    const endValueN = -1 * arrayParam[1][1] * subtractN;
    const productO1 = arrayParam[2][0] * arrayParam[3][1];
    const productO2 = arrayParam[2][1] * arrayParam[3][0];
    const subtractO = productO1 - productO2;
    const endValueO = +1 * arrayParam[1][3] * subtractO;
    const det3 = endValueM + endValueN + endValueO;
    const finalDet3 = +1 * arrayParam[0][2] * det3;

    const productX1 = arrayParam[2][1] * arrayParam[3][2];
    const productX2 = arrayParam[2][2] * arrayParam[3][1];
    const subtractX = productX1 - productX2;
    const endValueX = +1 * arrayParam[1][0] * subtractX;
    const productY1 = arrayParam[2][0] * arrayParam[3][2];
    const productY2 = arrayParam[2][2] * arrayParam[3][0];
    const subtractY = productY1 - productY2;
    const endValueY = -1 * arrayParam[1][1] * subtractY;
    const productZ1 = arrayParam[2][0] * arrayParam[3][1];
    const productZ2 = arrayParam[2][1] * arrayParam[3][0];
    const subtractZ = productZ1 - productZ2;
    const endValueZ = +1 * arrayParam[1][2] * subtractZ;
    const det4 = endValueX + endValueY + endValueZ;
    const finalDet4 = -1 * arrayParam[0][3] * det4;

    const matrix44Det = finalDet1 + finalDet2 + finalDet3 + finalDet4;
    return matrix44Det;
}
//undefined
let matrixFourSquare = Array.of([1, 2, 6, 6], [4, 7, 3, 2], [0, 0, 0, 0], [1, 2, 2, 9])
//undefined
findMatrix44Det(matrixFourSquare)
//0

//Same function reproduced below
//Using array values in the variable names
//e.g a22_33 for arrayParam[2][2] * arrayParam[3][3]
function findMatrix4x4Det(arrayParam) {
    const a22_33 = arrayParam[2][2] * arrayParam[3][3];
    const a23_32 = arrayParam[2][3] * arrayParam[3][2];
    const subA1 = a22_33 - a23_32;
    const resultA1 = +1 * arrayParam[1][1] * subA1;
    const a21_33 = arrayParam[2][1] * arrayParam[3][3];
    const a23_31 = arrayParam[2][3] * arrayParam[3][1];
    const subA2 = a21_33 - a23_31;
    const resultA2 = -1 * arrayParam[1][2] * subA2;
    const a21_32 = arrayParam[2][1] * arrayParam[3][2];
    const a22_31 = arrayParam[2][2] * arrayParam[3][1];
    const subA3 = a21_32 - a22_31;
    const resultA3 = +1 * arrayParam[1][3] * subA3;
    const det1 = resultA1 + resultA2 + resultA3;
    const endDet1 = +1 * arrayParam[0][0] * det1;

    const a_22_33 = arrayParam[2][2] * arrayParam[3][3];
    const a_23_32 = arrayParam[2][3] * arrayParam[3][2];
    const subB1 = a22_33 - a23_32;
    const resultB1 = +1 * arrayParam[1][0] * subB1;
    const a20_33 = arrayParam[2][0] * arrayParam[3][3];
    const a23_30 = arrayParam[2][3] * arrayParam[3][0];
    const subB2 = a20_33 - a23_30;
    const resultB2 = -1 * arrayParam[1][2] * subB2;
    const a20_32 = arrayParam[2][0] * arrayParam[3][2];
    const a22_30 = arrayParam[2][2] * arrayParam[3][0];
    const subB3 = a20_32 - a22_30;
    const resultB3 = +1 * arrayParam[1][3] * subB3;
    const det2 = resultB1 + resultB2 + resultB3;
    const endDet2 = -1 * arrayParam[0][1] * det2;

    const a_2133 = arrayParam[2][1] * arrayParam[3][3];
    const a_2331 = arrayParam[2][3] * arrayParam[3][1];
    const subC1 = a_2133 - a_2331;
    const resC1 = +1 * arrayParam[1][0] * subC1;
    const a_2033 = arrayParam[2][0] * arrayParam[3][3];
    const a_2330 = arrayParam[2][3] * arrayParam[3][0];
    const subC2 = a_2033 - a_2330;
    const resC2 = -1 * arrayParam[1][1] * subC2;
    const a_2031 = arrayParam[2][0] * arrayParam[3][1];
    const a_2130 = arrayParam[2][1] * arrayParam[3][0];
    const subC3 = a_2031 - a_2130;
    const resC3 = +1 * arrayParam[1][3] * subC3;
    const det3 = resC1 + resC2 + resC3;
    const endDet3 = +1 * arrayParam[0][2] * det3;

    const a_2132 = arrayParam[2][1] * arrayParam[3][2];
    const a_2231 = arrayParam[2][2] * arrayParam[3][1];
    const subX1 = a_2132 - a_2231;
    const resX1 = +1 * arrayParam[1][0] * subtX;
    const a_2032 = arrayParam[2][0] * arrayParam[3][2];
    const a_2230 = arrayParam[2][2] * arrayParam[3][0];
    const subtX2 = a_2032 - a_2230;
    const resX2 = -1 * arrayParam[1][1] * subtX2;
    const a_20_31 = arrayParam[2][0] * arrayParam[3][1];
    const a_21_30 = arrayParam[2][1] * arrayParam[3][0];
    const subtX3 = a_20_31 - a_21_30;
    const resX3 = +1 * arrayParam[1][2] * subtX3;
    const det4 = resX1 + resX2 + resX3;
    const endDet4 = -1 * arrayParam[0][3] * det4;

    const finalDet = endDet1 + endDet2 + endDet3 + endDet4;
    return finalDet;
}
//undefined
matrixFourSquare = Array.of([1, 1, 1, -1], [1, 1, -1, 1], [1, -1, 1, 1], [-1, 1, 1, 1])
//undefined
findMatrix44Det(matrixFourSquare)
//-16
matrixFourSquare = Array.of([2, 4, 6, 8], [3, 5, 7, 9], [-3, 1, 1, 3], [0, -2, 2, 4])
//undefined
findMatrix44Det(matrixFourSquare)
//8
matrixFourSquare = Array.of([2, 4, 0, -6], [1, 3, -5, 8], [-3, -4, 7, -3], [0, -2, -1, -7])
//undefined
findMatrix44Det(matrixFourSquare)
//-238
