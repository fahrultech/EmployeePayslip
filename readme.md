# Employee payslip for a flexible pay cycle
## Purpose Of Project
This is the Back End Technical Test
## Stack
- Node.js
## Problem Solving Steps
- Make json file contain the 2017-2018 tax rate and will act as database
- The Json Format contain array of items as Below
```
[
    {
        "minTaxableIncome" : 0, // Is the minimum range of taxable income in this rate
        "maxTaxableIncome" : 18200, // Is the maximum range of taxable income in this tax rate
        "basicTax" : 0, // The basic tax 
        "cent" : 0, // The rate of each dolar tax on this tax rate
        "taxDeduct" : 0 // The income will deducted by this amount and then the result will be calculated to get tax
    },
]
```
- Make the object as below for receiving result
```
const result = {
    name:'',
    grossIncome: 0,
    incomeTax: 0,
    date: "",
    netIncome: 0,
    super: 0
}
```

- First we will loop through the json data.
- Make if statement / comparation between **income** variable and **minTaxableIncome** and **maxTaxableIncome** each tax rate.
- If the **income** is in the range between **minTaxableIncome** and **maxTaxableIncome** variable
- Then we will calculate the tax for *one year* using below equation.
```
tax = basicTax + ((cent / 100) * (income - taxDeduct)).
```
- And the we will make calculation from the tax result as below for the rest of items.
```
grossIncome = Math.round(income / 12);
incomeTax = Math.round(tax / 12);
netIncome = Math.round(grossIncome - incomeTax)
super = Math.round((superTax / 100) * grossIncome)
```
- We use Math.round() function from javascript, so if the cent is greater than or equal 50 and then will round up, else if cent is less than 50 will be round down.

## Input
- This application is using CLI input
- After we start the application using npm start, we have to input below parameters in command prompt:
```
firstName : Andrew
lastName : Smith
income : 60050
superTax : 9
paymentDate : 01 March - 31 March
```
- We use Regular Expression to validate **income** input and **superTax** input as requested.
- You have to input number in income, otherwise it will give you error message.
- You have to input number between 0-12 in superTax, otherwise it will give you error message.
- Name and paymentDate just straight string, so the output will be as the input.

## Output
You will get the output in command prompt if everything is ok as below:
```
====================================
|             PaySlip              |
====================================
Name : Andrew Smith
Gross Income = $ 5004
Income Tax = $ 922
Net Income = $ 4082
Super = $ 450
Payment Date = 01 March - 31 March
```

## Usage
### Requirement
- You need to have node.js install in your computer
### Clone Repository
- 