//Return the number of vowels in a string

const vowels = ['a', 'e', 'i', 'o', 'u']

    // Initialize count
function countVowel(text){
    
    let count = 0


   // Loop through string to test if each character is a vowel

        for (let letter of text.toLowerCase()){
            if (vowels.includes(letter)) {
                count = count + 1
            }
        }
  // Return number of vowels
        return count
}
  // Take input
const data = prompt('Return the number of vowels in a string: ')

const output = countVowel(data)
console.log(output)

// 9. Return the number of vowels in a string
function countVowels(string) {
    const vowels = ["a", "e", "u", "i", "o"];
    let numberOfVowels = 0;
    for (let i = 0; i < string.length; i++) {
     if (vowels.includes(string[i].toLowerCase())) {
      numberOfVowels++;
     }
    }
    return numberOfVowels;
   }
   // console.log(countVowels("Nigeria"));


