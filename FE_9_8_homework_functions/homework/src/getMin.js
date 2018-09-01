function getMin(...arguments) {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }

    let min = args[0];
    for (let i = 1; i < args.length; ++i) {
        if (args[i] < min) {
            min = args[i];
        }
    }

    return min;
}
