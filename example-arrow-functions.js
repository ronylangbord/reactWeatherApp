var names = ['Andrew', 'Rony', 'Amit'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Alex'));
//
// var person = {
//   name: 'Rony',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };

// person.greet();
//challenge area

function add(a, b) {
  return a + b;
}

//add Satament
var addStatement = (a,b) => {
  return a + b;
}

var addExpression = (a,b) =>  a+b;

console.log(addExpression(1,2));
