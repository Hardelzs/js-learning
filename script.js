//This is a function that converts multiple different currencies to their USD equivalent and sums them up.
function AllToUSD(currencies){

const totalUsd = currencies.reduce((prevVal , currentVal) => {
//Add the converted amount to the previous conversions
prevVal += currentVal.amount / currentVal.singleCurrencyToUSD

return prevVal
} , 0)

return totalUsd
}

//The singleCurrencyToUSD field is the equivalent of that currency to 1 USD
//Example: 1 USD === 764 Yuan
//The amount field is the amount of that currency available.
const totalUsd = AllToUSD([
{
name: 'Yuan',
amount: 1000,
singleCurrencyToUSD: 764,
},
{
name: 'Yen',
amount: 600,
singleCurrencyToUSD: 12346,
},
{
name: 'Won',
amount: 857,
singleCurrencyToUSD: 857,
},
{
name: 'Naira',
amount: 50000,
singleCurrencyToUSD: 1000,
}
])

console.log(totalUsd)