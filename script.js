function fibonacci(n) {
    const matrix = [[1, 1], [1, 0]];

    function multiply(m1, m2) {
        return [
            [m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0], m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1]],
            [m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0], m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1]]
        ];
    }

    function power(matrix, n) {
        if (n === 1) return matrix;
        if (n % 2 === 0) {
            const halfPower = power(matrix, n / 2);
            return multiply(halfPower, halfPower);
        } else {
            return multiply(matrix, power(matrix, n - 1));
        }
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    const resultMatrix = power(matrix, n - 1);
    return resultMatrix[0][0];
}

module.exports = fibonacci;
