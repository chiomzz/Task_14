//Sort an array of numbers in descending order

const age =[17, 20, 15, 70, 55, 82, 18, 77]


age.sort(function(a,b){
    if (a > b){
        return -1
    }else if (b > a){
        return 1
    } else {
        return 0
    }
})
console.log(age)

// 7. Sort an array of NUMBERS in DESC order
function sortNumArray(numArray) {
    function compare(a, b) {
     return a - b;
    }
    const sorted = numArray.sort(compare);
    return sorted;
   }
   // console.log(sortNumArray([30, 400, 3, 19, 73, 1003, 201, 8]));