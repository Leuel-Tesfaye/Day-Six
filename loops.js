// for loop
/**
 * For loop structure
for(initialization, condition, increment/decrement){
    // code goes here
  }
 *  */ 
for (var i = 0; i <= 10; i++){
    // console.log(i)
}
// change the countries array to uppercase using for loop
let country = ['finland','Ethiopia', 'kenya', 'America']
let newArr = []
for (var i = 0; i < country.length; i++){
    newArr.push(country[i].toUpperCase())
}
console.log(newArr)

//Adding all elements in the array
let numbers = [1,2,3,4,5]
let sum = 0
for (i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

import { countries } from "./countries.js"
import { webTechs } from "./webTechs.js"

console.log(countries)
console.log(webTechs)

// Iterate 0 to 10 using for loop, do the same using while and do while loop

let num = 10;
for (var i = 0; i <= num; i++){
    // console.log(i)
}

// Write a loop that makes the following pattern using console.log():
/** 
 *  #
    ##
    ###
    ####
    #####
    ######
    #######
 */
let pattern = ''
for (var i = 0; i<= 7; i++){
         pattern += '#'
         console.log(pattern)
}

/**
 * Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
 */

let num2 = 10;
for (var i = 0; i <= num2; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

/**
 * Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */
let numLoop = 10
for (var i = 0; i <= 10; i++){
    // console.log(i)
    // console.log('This is num times 2 :', `${i * i}`)
    // console.log('This is num times 3: ', `${i * i * i}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers

const number = 100
for(let i= 0; i <= number; i++){
    if(i % 2 == 0){
        // console.log(i)
    }
   
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let count = 100
let sum2 = 0
for ( var i = 0;  i <= count; i++){
    sum2 += i
}
console.log('This is the sum of all the numbers:', sum2)

// Develop a small script which generate array of 5 random numbers

let randomNumbers = []
for(let i= 0; i <= 5; i++){
randomNumbers.push(Math.floor(Math.random() * 100))
}
console.log(randomNumbers)

// Develop a small script which generate any number of characters random id:

let length = 10
let characters = 'QWERTYUIOPASFGHJKLZXCVBNM0123456789'
let result = ''
for ( var i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(result)

// Extract all the countries containing only four characters from the countries array and print it as array
let fourCharCountries = countries.filter(country => country.length === 7);
console.log(fourCharCountries);

