// const day = 'Wednesday'

// const position = 3
//  const output = 'Today is ' + day + '.' + ' It is the ' + position + 'rd ' + 'day of the week' 

//  console.log(output)



// const age = 52

// if(age>=18 && age <=50) {
//   console.log('You can open this account type') 
// } else if(age>50) {
//     console.log('You are too old to open this account type')
//   } else {
//     console.log('You cannot open this account type')
// }


//Conditional statements
// const day = 'Friday'

// if (day==='Friday') {
//   console.log ('Yayy!! TGIF!')
// } else if (day==='Saturday'){
//   console.log ('Welcome to the Weekend!')
// }else if (day==='Sunday'){
//   console.log('Happy Sunday')
// } else {
//   console.log ('Have a good day')
// } 


// switch(day){
//    case 'Friday':
//     console.log ('Yayy!! TGIF!')
//     break
//    case 'Saturday':
//     console.log ('Welcome to the Weekend!') 
//     break
//    case ('Sunday'):
//      console.log ('Happy Sunday')
//      break
//    default:
//     console.log ('Have a good day!')  

// }


//While loops

// let number = 1 //starting point
// while (number <=15){
//     if (number === 1){
//         console.log (number + ' girl')
//     } else {
//         console.log (number + ' girls')
//     }
       
//     number = number + 1

// }

//For loops

// for(let number= 0; number<=10; number= number + 1){
//     if(number===1 || number===0){
//         console.log( number + ' pencil')  
//     } else {
//         console.log (number + ' pencils')
//     }
    

// }



//Function

// function Hello(name){
//     console.log('How are you today, ' + name+ '?');
// }
// Hello('Chiomzy');

// function AddNumbers (firstNumber, secondNumber){
//     const sum = firstNumber + secondNumber;
//     console.log(sum);
// }

// AddNumbers(25, 23);


// function calculateAreaOfRectangle (length, breath){
//     const product = length * breath;
//     console.log(product);
// }

// calculateAreaOfRectangle(10, 4);

// const day = 'Thursday'

// switch (day){
//     case 'Friday':
//         console.log('TGIF')
//         break
//     case 'Saturday':
//         console.log ('Happy Weekend')
//         break
//     case 'Sunday':
//         console.log ('Happy Sunday')
//         break
//     default:
//         console.log('Work Hard')    
// }


//Expressed function

// const greet =function(name){
//     console.log('Goodafternoon '+ name)
// }
// greet('Fellow Team Members');

// const myObject={
//     name:'chair',
//     material:'wood',
//     colour:'brown'
// }
// const json= JSON.stringify(myObject)
// const js = JSON.parse(json)
// console.log(js)

//Sort an array of strings in alphabetical order

// const friends =['Joan', 'Francis', 'Adrian', 'Moses', 'Zeus', 'Lizzy', 'Lilian']

// friends.sort()
// console.log(friends)

// sort an array of strings in descending order
// friends.sort(function(a,b){
//     if (a > b){
//         return -1
//     }else if (b > a){
//         return 1
//     } else {
//         return 0
//     }
// })
// console.log(friends)


function hello(name){
    console.log('Hi Madam '+ name)
}
hello('Chioma')

function multiplyNumbers(firstNumber, secondNumber){
    const product= firstNumber * secondNumber
    console.log(product)
}
multiplyNumbers(20, 2)


function addNumbers(firstNumber, secondNumber){
    const sum = firstNumber + secondNumber
    return sum
}

const moreOp = addNumbers(6,2) + 10
console.log(moreOp)

function myFunction(firstNumber, secondNumber){
    const sum = firstNumber + secondNumber
    const product = firstNumber * secondNumber
    const division = firstNumber % secondNumber

    return [sum, product, division]
}

console.log(myFunction(6,4))


function converter(dollar){
    const nairaValue = dollar * 650
    return nairaValue
}

console.log(converter(100))