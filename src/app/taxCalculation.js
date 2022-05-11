const data = require('../data/tax.json')

// Create result object as the calculation result
const result = {
    name:'',
    grossIncome: 0,
    incomeTax: 0,
    date: "",
    netIncome: 0,
    super: 0
}

const taxCalculation = (name, income, superTax, paymentDate) => {
    data.map(item => {
        if (income >= item.minTaxableIncome && income <= item.maxTaxableIncome) {
            tax = item.basicTax + ((item.cent / 100) * (income - item.taxDeduct))
        }
    });
    result.name = name
    result.paymentDate = paymentDate
    result.grossIncome = Math.round(income / 12);
    result.incomeTax = Math.round(tax / 12);
    result.netIncome = Math.round(result.grossIncome - result.incomeTax)
    result.super = Math.round(superTax / 100 * result.grossIncome)

    return result

}

module.exports = taxCalculation