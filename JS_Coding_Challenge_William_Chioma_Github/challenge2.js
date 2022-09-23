//Create a length converter function

//convert meters to cm

function converter(meter){
const cm = meter * 100
return cm
}

const result = converter(20)
console.log(result)

//convert degress to farenheit

function converter(degrees){

    const farenheit = degrees * 17

    return farenheit
}
const output = converter(200)

//console.log(output)

// 2. Lenght converter
function converter(ft) {
    const results = {
     meters: ft * 0.3048,
     cm: ft * 30.48,
     inches: ft * 12,
     yard: ft * 0.333,
    };
    return results;
   }
   // console.log(converter(6));