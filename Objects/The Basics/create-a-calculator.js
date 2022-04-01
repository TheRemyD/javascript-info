/* Instructions

Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.


*/

class Calculator {
    constructor() {
        this.sum = function() {
            return this.a + this.b;
        },

        this.mul = function() {
            return this.a * this.b;
        },

        this.read = function() {
            this.a = +(prompt('a?', 0));
            this.b = +(prompt('b?', 0));
        }
    }
};

let calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());