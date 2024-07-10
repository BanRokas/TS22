"use strict";
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numbers = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            const positiveNumberReducer = (acc, curr) => (curr > 0 ? acc + curr : acc);
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers,
            sumOfPositiveNumbers: addPositiveNumbers(numbers),
        });
    }
    console.groupEnd();
}
console.groupEnd();
