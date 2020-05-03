// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

let arr = [2,3,4,5]
const double = arr.map(n => n * 2);


// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = numbers => 
    numbers.map(num => num ** 2)
    .filter(square => square % 2 === 0)

  