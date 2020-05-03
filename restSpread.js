// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  const filterOutOdds = (...nums) => nums.filter(num=>  num % 2 === 0)

  const findMin = (...nums) => Math.min(...nums)

  
  const  mergeObjects = (obj1, obj2)=> ({...obj1, ...obj2})


  const doubleAndReturnArgs = (arr, ...args) =>[...arr, ...args.map(n => n * 2)]
  
  /** remove a random element in the items array
and return an array without that item. */
// removeRandom([1,2,3,4,5,6,7,8])

const removeRandom = items => {
     let rand = Math.floor(Math.random()*items.length);
     return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
   


/** Add every item in array2 to array1. */
//extend([1,2,3],[4,5,6])
const extend = (array1, array2) => ([...array1, ...array2])

/** Add a new key/val to an object. */

const addKeyVal = (obj, key, val)=>{
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}

/** Remove a key from an object. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}


/** Combine two objects. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Update an object, changing a key/value. */

const update = (obj, key, val)=> {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj
}