//What does the following code return?
//new Set([1,1,2,2,3,4]) // Set(4) {1, 2, 3, 4} a deduped object 

//What does the following code return?
//[...new Set("referee")].join("") // ["ref"] an array containing a deduped string 

//What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false); 
// Map(2) {Array(3) => true, Array(3) => false} 

// hasDuplicate

// const hasDuplicate = arr => arr.length != [[...new Set(arr)].length] ? true:false

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// vowelCount

// function isVowel(char){
// return "aeiou".includes(char);
// }
  
// function vowelCount(str){
//     const vowelMap = new Map(); // create new map
//     for(let char of str){ // itteravte through char in string 
//       let lowerCaseChar = char.toLowerCase() // set all char to lower case 
//       if(isVowel(lowerCaseChar)){ //chech if chsr is vowel 
//         if(vowelMap.has(lowerCaseChar)){ // if key(char) is in map 
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1); // update  kv with incrmented value 
//         } else {
//           vowelMap.set(lowerCaseChar, 1); // set key to char and value to 1
//         }
//       }
//     }
//     return vowelMap;
// }


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }