const view = (result) => {
    console.log(`
    ====================================
    |             PaySlip              |
    ====================================
    Name : ${result.name}
    Gross Income = $ ${result.grossIncome}
    Income Tax = $ ${result.incomeTax}
    Net Income = $ ${result.netIncome}
    Super = $ ${result.super}
    Payment Date = ${result.paymentDate}
    `)
}

module.exports = view

