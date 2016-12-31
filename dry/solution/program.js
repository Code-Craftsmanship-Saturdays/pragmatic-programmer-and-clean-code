'use strict';

function uglyAverage() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0, i;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function uglyStandardDeviation(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const avg = sum / numbers.length;

    let summation = 0;
    for (let i = 0; i < numbers.length; i++) {
        summation += Math.pow(Math.abs(numbers[i] - avg), 2);
    }
    return Number(Math.sqrt(summation / numbers.length).toFixed(2));
}

function average(input) {
    return input.reduce((previous, current) => previous + current, 0) / input.length;
}

function average2(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum / input.length;
}

class MathImpl {

    constructor(numbers) {
        this.numbers = numbers;
    }

    average(numbers) {
        return numbers.reduce((previous, current) => previous + current, 0) / this.numbers.length;
    }

    printWithTwoCharacters(standardDeviation) {
        return Number(standardDeviation.toFixed(2));
    }

    standardDeviation() {
        const avg = this.average(this.numbers);
        const summation = this.numbers
            .map(val => Math.pow(Math.abs(val - avg), 2))
            .reduce((prev, curr) => prev + curr, 0) / this.numbers.length;
        return this.printWithTwoCharacters(Math.sqrt(summation));
    }
}

function MathImplement(numbers) {
    this.numbers = numbers;

    this.average = () => {
        return this.numbers.reduce((previous, current) => previous + current, 0) / this.numbers.length;
    };

    this.standardDeviation = () => {
        const avg = this.average(this.numbers);
        const summation = this.numbers
            .map(val => Math.pow(Math.abs(val - avg), 2))
            .reduce((prev, curr) => prev + curr, 0) / this.numbers.length;
        return this.printWithTwoCharacters(Math.sqrt(summation));
    }

    this.printWithTwoCharacters = standardDeviation => {
        return Number(standardDeviation.toFixed(2));
    };
}

module.exports = {
    uglyAverage,
    uglyStandardDeviation,
    average,
    average2,
    MathImpl,
    MathImplement
};