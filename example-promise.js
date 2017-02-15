// function getTempCallback(location, callback){
//   //success case
//   callback(undefined, 78);
//   //error
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     consoloe.log('error', err);
//   } else {
//     console.log(success, temp)
//   }
// });

function addPromise(a ,b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('Invalid input');
    }

  })
}

console.log('First try:');
addPromise(2,3).then(function(temp){
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
});

console.log('Second try:');
addPromise('a',3).then(function(temp){
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
});
