const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06

// Using Array.map()
// const pricesWithTax = prices.map(x => x + x * gst)

// Using forEach without =>
const pricesWithTax = [];
prices.forEach(function(price) {
    pricesWithTax.push(price + price * gst);
})

console.log(pricesWithTax)