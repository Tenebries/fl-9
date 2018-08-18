let sideA = parseFloat(prompt(`Input first side of triangle:`));
let sideB = parseFloat(prompt(`Input second side of triangle:`));
let angle = parseFloat(prompt(`Input angle in between:`));

if (sideA <= 0 || sideB <= 0 || angle <= 0 || isNaN(sideA) || isNaN(sideB) || isNaN(angle)) {
    result = `Invalid data`;
} else {
    let sideC = getSideC(sideA, sideB, angle);
    let area = getArea(sideA, sideB, angle);
    let perimeter = getPerimeter(sideA, sideB);

    result = (`c length: ${+sideC.toFixed(2)}
Triangle square: ${+area.toFixed(2)}
Triangle perimeter: ${+perimeter.toFixed(2)}`);
}

console.log(result);

function getSideC(sideA, sideB, angle) {
    const STRAIGHT_ANGLE = 180;
    let cos = Math.cos(angle * (Math.PI / STRAIGHT_ANGLE));
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * cos);
}

function getArea(sideA, sideB, angle) {
    const STRAIGHT_ANGLE = 180;
    return sideA * sideB * Math.sin(angle * (Math.PI / STRAIGHT_ANGLE)) / 2;
}

function getPerimeter(sideA, sideB) {
    const STRAIGHT_ANGLE = 180;
    let cos = Math.cos(angle * (Math.PI / STRAIGHT_ANGLE));
    let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * cos);
    return sideA + sideB + sideC;
}
