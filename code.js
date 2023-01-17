
function prepareBinary(arr,elem){
    
    arr = arr.sort();

    function binarySearch(arr, val, start = 0, end = arr.length - 1) {
        const mid = Math.floor((start + end) / 2);

        if (val === arr[mid]) {
            return mid;
        }

        if (start >= end) {
            return -1;
        }

        if( val < arr[mid]){
            return binarySearch(arr, val, start, mid - 1);
        }else{
            return binarySearch(arr, val, mid + 1, end);
        }
    }

    return binarySearch(arr,elem);
}

console.log(prepareBinary([2,1,312,12,1,2,12,4,12,2,1,132],1));

// to run use commande : node code.js