//forEach 

function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(val){
      newArr.push(val * 2);
    });
    return newArr;
  }


  function onlyEvenValues(arr){
    const newArr = [];
    arr.forEach(function(val){
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }

  function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach(function(word){
        let chars= word[0].concat(word[word.length-1]) ;
        newArr.push(chars)
    });
    return newArr;
  }

  function addKeyAndValue(arr, key, value){
    arr.forEach(function(person){
        person[key]=value
    })
    return arr;
  }

  // 
  function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
            obj[lowerCasedLetter]++;
        } else {
            obj[lowerCasedLetter] = 1;
        }
    }
  });
  return obj;
  }

  // Map
  function doubleValuesWithMap(arr){
   return arr.map(function(val){
       return val * 2;
    });
  }

  function valTimesIndex(arr){
    return arr.map(function(val,i){
        return val * i;
     });
  }

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
     });
}

function extractFullName(arr){
    const key1 = 'first';
    const key2 = 'last'; 
    return arr.map(function(val){
        return val[key1].concat(' ' + val[key2]);
     });
}

//Filter

function filterByValue(arr, key){
   return arr.filter(function(val){
    return val[key];
    })
}

/* [0] is looking for idx 0 of the new filtered array reutrning 
undifined if no vale is appended */  
function find(arr, value){
    return arr.filter(function(val){
        return val === value;
    })[0];
}

function findInObj(arr, key, value){
    return arr.filter(function(val){
        return val[key] === value
    })[0];
}

function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

  function doubleOddNumbers(arr){
    return arr.filter(function(val){
       return val % 2 !== 0; 
    })
    .map(function(val){
        return val *2;
    });
  }