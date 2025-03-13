function getHighestIndex(arr) {
    let b = 0;
    for (let i = 1; i < arr.length; i++) 
        if (arr[i] > arr[b]) b=i ;
    return b;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));