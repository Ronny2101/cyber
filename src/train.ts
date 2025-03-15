 function  getPositive(arr) {
     return arr.filter(num => num > 0).join('');
}


console.log(getPositive([1, -4, 2]));