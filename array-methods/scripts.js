// !Translate border-left-width to borderLeftWidth

function camelCaseString() {
    // TODO: Write the function camelize(str) that changes dash-separated words like 
    // “my-short-string” into camel-cased “myShortString”.
    
    // That is: removes all dashes, each word after dash becomes uppercased.

    // camelize("background-color") == 'backgroundColor';
    // camelize("list-style-image") == 'listStyleImage';
    // camelize("-webkit-transition") == 'WebkitTransition';
    
    // P.S. Hint: use split to split the string into an array, transform it and join back.
    
    const camelize = str => str.split('-').map((elem, i) => i > 0 ? elem[0].toUpperCase() + elem.slice(1, elem.length) : elem).join('');
    
    console.log(camelize('background-color'));
    console.log(camelize("list-style-image"));
    console.log(camelize("-webkit-transition"));
}

// camelCaseString();

function filterRangeCall() {
    // TODO: Write a function filterRange(arr, a, b) that gets an array arr,
    // looks for elements with values higher or equal to a and lower or equal
    // to b and return a result as an array.
    // The function should not modify the array. It should return the new array.

    const filterRange = (arr, a, b) => arr.filter((elem) => a <= elem && b >= elem);

    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    console.log( filtered ); // 3,1 (matching values)
    console.log( arr ); // 5,3,8,1 (not modified)
}

// filterRangeCall();

function filterInPlace() {
    // TODO: Write a function filterRangeInPlace(arr, a, b) that gets an array arr
    // and removes from it all values except those that are between a and b.
    // The test is: a ≤ arr[i] ≤ b.
    // The function should only modify the array. It should not return anything.

    function filterRangeInPlace(arr, a, b) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < a || arr[i] > b) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    console.log(arr); // [3, 1]
}

// filterInPlace();

function sortingReversed() {
    let arr = [5, 2, 1, -10, 8];
    console.log(arr);

    arr.sort().reverse();

    console.log(arr);
}

// sortingReversed();

function sortCopy() {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);

    function copySorted(arr) {
        return arr.slice().sort();  // slice is needed to create a new array from the old one
    }

    console.log(sorted); // CSS, HTML, JavaScript
    console.log(arr); // HTML, JavaScript, CSS (no changes)
}

// sortCopy();

function extendableCalculator() {
    function Calculator() {
        this.operations = {};

        this.calculate = function (str) {
            let equation = str.split(" "),
                x = +equation[0],
                operator = equation[1],
                y = +equation[2];

            if (isNaN(x) || isNaN(y)) return NaN;
            if (!this.operations[operator]) this.addOperation(operator, Function("x", "y", `return x ${operator} y`));

            return this.operations[operator](x, y);
        };

        this.addOperation = function (name, func) {
            this.operations[name] = func;
        };
    }

    let calc = new Calculator();

    console.log(calc.calculate("3 + 7")); // 10
    console.log(calc.calculate("3 * 7")); // 21
    console.log(calc.calculate("100 / 10")); // 10
    console.log(calc.calculate("100 % 11")); // 1
}

// extendableCalculator();

// TODO: You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.

function mapNames() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names = users.map(elem => elem.name);

    console.log(names);
}

// mapNames();


// TODO: Write the code to create another array from it,
// of objects with id and fullName, where fullName is generated from name and surname.
function mapObjects() {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped = users.map(elem => ({fullName: `${elem.name} ${elem.surname}`, id: elem.id}));

    /*
    usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    */

    console.log(usersMapped[0].id)  // 1
    console.log(usersMapped[0].fullName) // John Smith
}

// mapObjects();

// TODO: Write the function sortByAge(users) that gets an array of objects
// with the age property and sorts them by age.
function sortUsersByAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    const sortByAge = arr => arr.sort((a, b) => a.age - b.age);

    sortByAge(arr);

    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

// sortUsersByAge();

// TODO: Write the function shuffle(array) that shuffles (randomly reorders) elements
// of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
function shuffleAnArray() {
    let arr = [1, 2, 3];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[rand];
            arr[rand] = temp;
        }
        return arr;
    }

    console.log(shuffle(arr));
    console.log(shuffle(arr));
    console.log(shuffle(arr));
    console.log(shuffle(arr));
    console.log(shuffle(arr));
}

// shuffleAnArray();

// TODO: Write the function getAverageAge(users) that gets an array of
// objects with property age and returns the average age.
//
// The formula for the average is (age1 + age2 + ... + ageN) / N.
function getTheAverageAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];

    function getAverageAge(users) {
        return users.reduce((t, c) => t += c.age, 0) / users.length;
    }

    console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}

// getTheAverageAge();

// TODO: Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
function filterUniqueArrayMembers() {
    function unique(arr) {
        return arr.filter((value, index, elem) => elem.indexOf(value)=== index);
    }

    let strings = [
        "Hare",
        "Krishna",
        "Hare",
        "Krishna",
        "Krishna",
        "Krishna",
        "Hare",
        "Hare",
        ":-O",
    ];

    console.log(unique(strings)); // Hare, Krishna, :-O
}

// filterUniqueArrayMembers();

// TODO: Let’s say we received an array of users in the form {id:..., name:..., age:... }.
//
// Create a function groupById(arr) that creates an object from it, with id as the key,
// and array items as values. USE REDUCE
function createKeyedObjectFromArray() {
    let users = [
        { id: "john", name: "John Smith", age: 20 },
        { id: "ann", name: "Ann Smith", age: 24 },
        { id: "pete", name: "Pete Peterson", age: 31 },
    ];

    let usersById = groupById(users);

    function groupById(users) {
        return users.reduce((userObj, currentValue) => {
            userObj[currentValue.id] = currentValue;
            return userObj;
        }, {});
    }
    /*
        after the call we should have:

        usersById = {
            john: {id: 'john', name: "John Smith", age: 20},
            ann: {id: 'ann', name: "Ann Smith", age: 24},
            pete: {id: 'pete', name: "Pete Peterson", age: 31},
        }
    */

    console.log(usersById);
}

// createKeyedObjectFromArray();