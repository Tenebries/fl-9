function getClosestToZero () {
    let closeToZero;

    for (let i = 0; i <= arguments.length; i++) {
        if (Math.abs(arguments[i]) > Math.abs(arguments[i + 1])) {
            closeToZero = arguments[i + 1];
        }
    }

    return closeToZero;
}
