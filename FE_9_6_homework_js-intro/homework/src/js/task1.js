let price = parseFloat(prompt(`Enter amount of money:`));
let discount = parseFloat(prompt(`Enter discount:`));
let result = '';

if (price < 0 || discount < 0 || discount > 100 || isNaN(+price) || isNaN(+discount)) {
    result = 'Invalid date';
} else {
    let priceSaved = price / 100 * discount;
    let priceDiscount = price - priceSaved;

    result = `Price without discount: ${+price.toFixed(2)}
Discount: ${+discount.toFixed(2)}%
Price with discount: ${+priceDiscount.toFixed(2)}
Saved: ${+priceSaved.toFixed(2)}`;
}

console.log(result);
