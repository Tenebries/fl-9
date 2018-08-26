function isPrime(a) {
    if ( a <= 1) {
        return false;
    }

    for (let b = 2; b * b <= a; b++) {
        if (a % b === 0) {
            return false;
        }
    }

    return true;
}
