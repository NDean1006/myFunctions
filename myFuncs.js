function myForEach(arr, callback){
    for(let i=0; i < arr.length; ++i){
        callback(arr[i], i, arr);
    };
};

function myMap(arr, callback){
    const mappedArray = [];
    for(i=0;i<arr.length;++i){
        const val =callback(arr[i], i, arr);
        mappedArray.push(val);
    }

    return mappedArray;
}


function myFilter(arr, callback){
    let filteredArray = [];
    for(let i = 0; i < array.length; i++){
      if(callback(arr[i], i, arr)){
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

  function mySome(arr, callback){
    for(i =0; i<arr.length;++i){
      if (callback(arr[i], i, arr)) return true
    }
    return false;
  }

  function myEvery(arr, callback){
    for(i =0; i<arr.length;++i){
      if (!callback(arr[i], i, arr)) return flase
    }
    return true;
  }