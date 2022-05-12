const taxCalculation = require('../app/taxCalculation');
const testResult = require('./data/testResult.json')

describe('PaySlip Calculation', () => {
    test('get calculation result of Andrew Smith Payslip', () => {
        expect(taxCalculation('Andrew Smith',60050,9,'01 March - 31 March'))
        .toEqual(testResult[0])
    });
    test('get calculation result of Claire Wong Payslip', () => {
        expect(taxCalculation('Claire Wong',120000,10,'01 March - 31 March'))
        .toEqual(testResult[1])
    });
    test('get calculation result of John Wayne Payslip', () => {
        expect(taxCalculation('John Wayne',195000,12,'01 March - 31 March'))
        .toEqual(testResult[2])
    });
})