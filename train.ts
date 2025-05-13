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

// function palindromCheck(string: string) {
//    return string === string.split("").reverse().join("");
// }

// console.log(palindromCheck("dat"));
// console.log(palindromCheck("dad"));


//Task O

// function calculateSumOfNumbers(arr: any[]) {
//    let sum: number = 0;

//    for(const item of arr) {
//       if(typeof item === "number") {
//          sum += item
//       }
//    }
//    return sum;
// }


// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true,35]));


//Task P

// function objectToArray(obj: object): [string, any] [] {
//    return Object.entries(obj);
// }


// console.log(objectToArray({a:10,b:20}));


//Task Q

// function hasProperty(object: object, key: string) {
//    return key in object;
// }


// console.log(hasProperty({name: "BMW", model: "520d"}, "model"));
// console.log(hasProperty({name: "BMW", model: "520d"}, "uy"));


//Train R

// function calculate(string:string)  {
//    const [a, b] = string.split(" + ").map(Number);
//    return a + b;
// }

// console.log(calculate("1 + 3"));

//Train S

// function missingNumber(number:number[]) {
//    let n = number.length;
//    let total = (n * (n + 1)) /2
//    let sum = 0;

//    for (let num of number) {
//       sum += num;
//    }
//    return total - sum;
// }

// console.log(missingNumber([3, 0, 1]));


//Task T

// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//    return[...arr1, ...arr2].sort((a, b) => a - b);
// }


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));


//Task U

// function sumOdds(number: number) {
//    let count = 0;

//    for(let i = 1; i < number; i+=2) {
//       count++;
//    }
//    return count;
// }
 
// console.log(sumOdds(9));
// console.log(sumOdds(11));

//Task V

// function countChars(string: string): Record<string, number> {
//    const result: Record<string, number> = {};
//    for (const char of string) {
//       if(result[char]) {
//          result[char]++;
//       }else{
//          result[char] = 1;
//       }
//    }
//    return result;
// }

// console.log(countChars("hello"));


//Task W


// function chunkArray<A>(arr: A[], size: number): A[][] {
//    return Array.from({ length: Math.ceil(arr.length/size)}, (_, i) => 
//       arr.slice(i * size, i *size + size)
//    );
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));




//Task X

// function countOccurrences(obj: any, key: string) {
//    if (typeof obj !== "object" || obj === null) return 0;
 
//    let count = key in obj ? 1 : 0;
 
//    for (const k in obj) {
//      count += countOccurrences(obj[k], key);
//    }
 
//    return count;
//  }
 
//  console.log(countOccurrences({ model: "Bugatti", steer: { model: "HANKOOK",size: 30 }}, "model")); 


//Task Y

// function findIntersection(a:number[], b: number[]) {
//    return [...new Set(a.filter(x => b.includes(x)))];
// }


// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

//Task Z

// function sumEvens(numbers:number[]) {
//    return numbers.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 3, 2]));


//Task ZB

function randomBetween(min: number, max: number) {
   return Math.round(Math.random() * (max - min) + min);
}

console.log(randomBetween(30, 50));