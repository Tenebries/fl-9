function reverseNumber(a) {
    let b = 0;
    let ten = 10;

    while (a !== 0) {
        b *= ten;
        b += a % ten;
        a -= a % ten;
        a /= ten;
    }

    return b;
}