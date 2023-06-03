const readlineSync = require('readline-sync');

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

//input values function
const askUser = (questionPrompt) => readlineSync.question(questionPrompt)

//interactive mode
const startInteractiveMode = () => {
    const questions = ['a = ', 'b = ', 'c = '];
    const answers = questions.map(element => askUser(element));

    return solveQuadraticEquation(...answers);
}

if (process.argv.length == 2) {
    startInteractiveMode()
}