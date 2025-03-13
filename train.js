function getHighestIndex(arr) {
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) 
        if (arr[i] > arr[maxIdx]) maxIdx = i;
    return maxIdx;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));