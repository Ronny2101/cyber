// function getHighestIndex(arr) {
//     let highIndex = 0;
//     for (let i = 1; i < arr.length; i++) 
//         if (arr[i] > arr[highIndex]) highIndex=i ;
//     return highIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));


//Task H
function getPositive(arr: number[]): string {
    return arr.filter((num: number) => num > 0).join('');
}


console.log(getPositive([1, -4, 2]));