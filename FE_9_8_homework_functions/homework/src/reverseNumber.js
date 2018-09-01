reverseNumber = (number) => {
    let reversed = number.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(number);
};
