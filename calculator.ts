type Data = {
    initialAmoount: number,
    annualContribution: number,
    annualReturn: number,
    numberYears: number
} ;

let data: Data = {
    initialAmoount: 10000,
    annualContribution: 200,
    annualReturn: 0.05,
    numberYears: 10
};

//výpočet celkové částky po zadaném počtu let
function calculatorInvestment(data: Data) {
    const { initialAmoount, annualContribution, annualReturn, numberYears } = data;
    let totalAmount = initialAmoount * Math.pow(1 + annualReturn, numberYears) + annualContribution * ((Math.pow(1 + annualReturn, numberYears) - 1) / annualReturn);
    return totalAmount;
}

//Toto je jenom tisk
function printResult(results : number) {
    console.log(`Total amount after ${data.numberYears} years: $${results.toFixed(2)}`);
}

const results = calculatorInvestment(data);
printResult(results);

