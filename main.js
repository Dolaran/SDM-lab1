//quadratic eqation solving
const quadraticEquationSolve = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    const discriminantSqrt = Math.sqrt(discriminant)

    if (discriminant > 0) {
        const x1 = (-b + discriminantSqrt) / (2 * a);
        const x2 = (-b - discriminantSqrt) / (2 * a);
        return [x1, x2]
    } else if (discriminant == 0) {
        const x1 = (-b + discriminantSqrt) / (2 * a);
        return [x1]
    } else {
        return []
    }
}