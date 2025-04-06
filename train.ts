// function getHighestIndex(arr) {
//     let highIndex = 0;
//     for (let i = 1; i < arr.length; i++) 
//         if (arr[i] > arr[highIndex]) highIndex=i ;
//     return highIndex;
// }s

// console.log(getHighestIndex([5, 21, 12, 21, 8]));


//Task H

//typescriptda argument type ko'rsatilmasa error beradi

// function getPositive(arr: number[]): string {
//     return arr.map((num: number) => (num > 0 ? num : '')).join('');
// }

// console.log(getPositive([1, -4, 2]));



//Task H-2

// function getDigits(input:string) {
//     let result = "";
//     for (const char of input) {
//         if (char >= "0" && char <= "9") {
//             result += char;
//         }
//    }
//    return result;
// }

// console.log(getDigits("m14i1t"));

 


/* 
Project standards
 -Logging standards
 - Running standards
    function , method, variable => CAMEL
    class => PASCAL
    folder => KEBAB
    css => SNAKE
 -Error handling




*/



// Task - I
// function majorityElement(arr: number[]) {
//    return arr.sort((a, b) => arr.filter(x => x === b).length - arr.filter(x => x === a).length)[0];
//  }

//  console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));


//TASK J

// function findLongestWord(string: string)  {
//    return string.split(" ").reduce((a, b) =>   {
//        if ( b.length > a.length)  {
//             return b;
//          } else {
//             return a;
//          }
//       });
// }
   

 

// console.log(findLongestWord("I came from Uzbekistan!!!"));


// Task K

// function countVowels (string:string)  {
//    let count = 0;
//    for (let char of string) {
//       if ('aieuo'.includes(char)) {
//          count++;
//       }
//    } 
//    return count;
// }

// console.log(countVowels("string"));



//Task L

// function reverseSentence(sentence:string) {
//     return sentence
//     .split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ");
//    }
// console.log(reverseSentence("we like coding!"));



//Task M

// function getSquareNumbers(arr: number[]): {number: number; square: number} [] {
//    return arr.map(num => ({
//       number: num,
//       square: num * num 
//    }));
// } 


// console.log(getSquareNumbers([2,3,1,4]));


//Train N

function palindromCheck(string: string) {
   return string === string.split("").reverse().join("");
}

console.log(palindromCheck("dat"));
console.log(palindromCheck("dad"));