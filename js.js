function mostFrequent(arr) {
    let map = {};
    let maxEl = arr[0], maxCount = 1;
    
    for(let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if(map[el] == null)
        map[el] = 1;
      else
        map[el]++;  
      if(map[el] > maxCount) {
        maxEl = el;
        maxCount = map[el];
      }
    }
    return maxEl + " ( " + maxCount + " fois ) ";
  }
  console.log(mostFrequent([3, 'a', 'a', 'b', 2, 3, 'a', 3, 'a', 2, 'c', 9, 3, 'a','b','b','b','b','b','a','a','a']));