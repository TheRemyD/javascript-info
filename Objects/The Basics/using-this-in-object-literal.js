/* Instructions

Using "this" in object literal
importance: 5

Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log(user);
console.log( user.ref.name ); // What's the result? 'undefined' because this is assigned
                              // at call not at creation.