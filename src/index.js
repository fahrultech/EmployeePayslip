// No Hardcoded table
// The tax rate i put inside json file and the item in json file are 
// minTaxableIncome = the Minimum taxable income for this rate
// maxTaxableIncome = The maximum taxable income for this rate
// basicTax = Is the basic tax before add by cent
// cent
// taxDeduct = The deduct value by income for this rate


const prompt = require('prompt')
const taxCalculation = require('./app/taxCalculation')
const view = require('./app/view')

prompt.start();

const properties = [
    {
        name: 'firstName'
    },
    {
        name: 'lastName'
    },
    {
        name: 'income',
        validator : /^\d+$/,
        warning : 'Income must be only number'
    },
    {
        name: 'superTax',
        validator : /\b([0-9]|1[0-2])\b/,
        warning: 'Super Tax must be only number with range 0 - 12 '
    },
    {
        name: 'paymentDate',
    }
]

prompt.get(properties, function (err, result) {
    const income = result.income;
    const superTax = result.superTax;
    const name = result.firstName +" "+result.lastName
    const paymentDate = result.paymentDate
    
    view(taxCalculation(name, income, superTax, paymentDate))
});

