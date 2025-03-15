// function getHighestIndex(arr) {
//     let highIndex = 0;
//     for (let i = 1; i < arr.length; i++) 
//         if (arr[i] > arr[highIndex]) highIndex=i ;
//     return highIndex;
// }s

// console.log(getHighestIndex([5, 21, 12, 21, 8]));


//Task H

//typescriptda argument type ko'rsatilmasa error beradi

function getPositive(arr: number[]): string {
    return arr.map((num: number) => (num > 0 ? num : '')).join('');
}

console.log(getPositive([1, -4, 2]));