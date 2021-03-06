# Algorithms and Methods

## Strings

### String Method charAt()

```
const prodCode = 'SHRT-L'
const prodSize = prodCode.charAt(prodCode.length - 1)

console.log(prodSize) // L
```

### String Method concat()

```
const firstName = 'Joe'
const lastName = 'Cool'
const fullName = firstName.concat(' ', lastName)

console.log(fullName) // Joe Cool
```

### String Method endsWith()

Returns boolean based on test

```
const lastName = 'Gonzales'
const endsWithS = lastName.endsWith('s')

console.log(endsWithS) // true
```

```
const productCode = 'WH-M-KIT-01'
const isKit = productCode.endsWith('KIT', 8)

console.log(isKit) // true
```

### String Method indexOf()

Search for the first instance of a string, case sensitive.

```
const productCode = 'WH-M-KIT-01'
const firstHyphen = productCode.indexOf('-')

console.log(firstHyphen) // 2
```

### String Method includes()

Search string for match, case sensitive

```
const productCode = 'WH-M-KIT-01'
const isKit = productCode.includes('KIT')

console.log(isKit) // true
```

### String Method lastIndexOf()

Find the last instance of string, case sensitive, zero indexed.

```
const productCode = 'WH-M-KIT-01-W'
const lastW = productCode.lastIndexOf('W')

console.log(lastW) // 12
```

### String Method match()

Retrieves the result of matching a string against a regular expression. Returns an array.

```
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
const regex = /[A-Z]/g
const caps = paragraph.match(regex)

console.log(caps) // ['T', 'I']
```

### String Method padEnd()

Pads end of current string with given string, repeated if necessary.

```
const flights = ['ag12', 'zz88', 'aa1']
const paddedFlights = flights.map((flight) => flight.padEnd(5, '-'))

console.log(paddedFlights) // ['ag12-', 'zz88-', 'aa1--']
```

### String Method padStart()

Pads start of current string with given string, repeated if necessary.

### String Method repeat()

Repeats selected string number of times

```
const country = 'USA!'
const chant = country.repeat(3)

console.log(chant) // USA!USA!USA!
```

### String Method replace()

Takes a string and replaces the matching value. If using a regular expression, it will replace all occurrences, if using a string, it will replace only the first occurrence.

```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
const regex = /Dog/gi
const newPara = paragraph.replace(regex, 'cat')

console.log(newPara) // The quick brown fox jumps over the lazy cat. If the cat reacted, was it really lazy?
```

### String Method search()

Searches a string for a match, returns index of match

### String Method slice()

Returns a shallow copy of a portion of an array from the indexed `start` to `end` (end not required)

```
const animals = ['Lion', 'Bear', 'Guppy', 'Catfish']
const fishOnly = animals.slice(2)

console.log(fishOnly) // ['Guppy', 'Catfish']
```

### String Method split()

Divides a string into an array of strings based on a condition, returns the array.

```
const animalName = 'orangutan'
const letters = animalName.split('')

console.log(letters) // ['o', 'r', 'a', 'n', 'g', 'u', 't', 'a', 'n']
```

### String Method startsWith()

```
const taxCode = '1-US-ABC'
const isUSTaxCode = taxCode.startsWith('US', 2)

console.log(isUSTaxCode) // true
```

### String Method substr()

`string.substr(start, length)`

Extracts part of a string, does not change the original string.

```
const taxCode = '1-US-ABC'
const countryCode = taxCode.substr(2, 2)

console.log(countryCode) // US
```

### String Method toLowerCase() & toUpperCase()

```
const couponCode = 'Czw5Ttq'
const lowerCouponCode = couponCode.toLowerCase()

console.log(lowerCouponCode) // czw5ttq
```

```
const couponCode = 'Czw5Ttq'
const upperCouponCode = couponCode.toUpperCase()

console.log(upperCouponCode) // CZW5TTQ
```

### String Method trim() trimLeft() trimRight()

trim() will remove whitespace from left and right

```
const couponCode = '  Czw5Ttq  '
const trimmedCouponCode = couponCode.trim()

console.log(trimmedCouponCode) // Czw5Ttq
```

trimLeft() or trimRight() will trim either side

```
const couponCode = '           Czw5Ttq  '
const trimmedCouponCode = couponCode.trimRight()

console.log(trimmedCouponCode) //            Czw5Ttq
```

### String method toString()

Convert a value to a string

```
const word = ['animal']
const string = word.toString()

console.log(string) // animal
```

## Numbers

### Number Properties

MIN_VALUE and MAX_VALUE give you the values for calculations.

MIN_SAFE_INTEGER and MAX_SAFE_INTEGER

`console.log(Number.MIN_VALUE) // 5e-324`

### Number method isFinite()

You can use this to test whether a number is finite or not.

```
console.log(Number.isFinite(100)) // true
```

### Number method isInteger()

Check if a number is an integer (whole number)

```
console.log(Number.isInteger(5.5)) // false
```

### Number method isNan()

Determines whether a value is NaN or not

```
const dollars = 50

console.log(Number.isNaN(dollars)) // false
```

### Number method parseFloat()

Parses an argument (converting it to a string first if needed) and returns a floating point number

```
const poolDepth = '5.7'

console.log(parseFloat(poolDepth)) // 5.7
```

### Number method parseInt()

Parses a string argument and returns an integer of the specified radix.

```
const poolDepth = '5.6'

console.log(parseInt(poolDepth)) // 5
```

### Number method toFixed()

Converts a number to a string, rounds the string to a specified number of decimals.

```
const randomNumber = 3.1475926535

console.log(randomNumber.toFixed(2)) // 3.15
```

### Number method toPrecision()

Returns a string representing the Number object to the specified precision.

```
const randomNumber = 3.1475926535

console.log(randomNumber.toPrecision(4)) // 3.148
```

## Arrays

### Array Properties

Get the length of an array `Array.length`

```
const reptiles = ['Snake', 'Frog', 'Lizard']

console.log(reptiles.length) // 3
```

Array.isArray()

Check whether passed value is an array

```
const reptiles = ['Snake', 'Frog', 'Lizard']

console.log(Array.isArray(reptiles)) // true
```

### Array method .concat()

Used to merge two or more arrays. Does not change the existing arrays, but instead returns a new array.

```
const reptiles = ['Snake', 'Frog', 'Lizard']
const birds = ['Ostrich', 'Eagle', 'Peacock']
const mammals = ['Lion', 'Sheep', 'Wolf']
const animalKingdom = reptiles.concat(birds, mammals)

console.log(animalKingdom) // ['Snake', 'Frog', 'Lizard', 'Ostrich', 'Eagle', 'Peacock', 'Lion', 'Sheep', 'Wolf']
```

### Array method .entries()

This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```
const reptiles = ['Snake', 'Frog', 'Lizard']
const reptileIterator = reptiles.entries()

console.log(reptileIterator.next().value) // [0, 'Snake']
console.log(reptileIterator.next().value) // [1, 'Frog']
```

### Array method .every()

Tests whether all elements in the array pass the test implemented by the provided function.

```
const grades = [98, 68, 92]
const allPassing = grades.every(grade => grade > 69)

console.log(allPassing) // false
```

### Array method .fill()

Changes all elements in an array to a static value, from a start index to an end index, it returns the modified array.

`fill(value, start, end)`

```
const beginningGrades = new Array(10).fill(0)

console.log(beginningGrades) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### Array method .filter()

Creates a new array with all the elements that pass the test implemented by the provided function.

```
const grades = [99, 85, 92, 62, 88, 69]
const failingGrades = grades.filter(grade => grade < 70)

console.log(failingGrades) // [62, 69]
```

### Array method .find()

Returns the first element in the provided array that satisfies the provided testing function. If no values pass, undefined is returned.

```
const grades = [99, 85, 92, 62, 88, 69]
const firstFailingGrade = grades.find(grade => grade < 70)

console.log(firstFailingGrade) // [62]
```

### Array method .findIndex()

Returns the index of the first element in the array that satisfies the provided testing function, otherwise returns -1.

```
const grades = [99, 85, 92, 62, 88, 69]
const firstFailIndex = grades.findIndex(grade => grade < 70)

console.log(firstFailIndex) // [3]
```

### Array method .forEach()

Executes a provided function on each element in the array.

```
const nums = [3, 6, 9]
nums.forEach(num => console.log(num * num)) // 9, 36, 81
```

### Array method .includes()

Determines whether an array includes a certain value, returning true or false. Case sensitive.

```
const beers = ['IPA', 'Pilsner', 'Lager']

console.log(beers.includes('IPA')) // true
```

### Array method .indexOf()

Returns the first index at which a match can be found in the array.

```
const beers = ['IPA', 'Pilsner', 'Lager']

console.log(beers.indexOf('IPA')) // 0
```

### Array method join()

Creates and returns a new string by concatenating all of the elements of an array.

```
const beers = ['IPA', 'Pilsner', 'Lager']
const giantBeer = beers.join('')

console.log(giantBeer) // IPAPilsnerLager
```

### Array method lastIndexOf

Gives the last index at which a given element can be found.

```
const beers = ['IPA', 'Pilsner', 'Lager', 'IPA']
const lastIPA = beers.lastIndexOf('IPA')

console.log(lastIPA) // 3
```

### Array method .map()

Creates a new array populated with the results of running a function on every element in the array.

```
const beersList = ['Juicy Jack', 'Stoney Hazy', 'PebbleHead', 'IPA']
const sanTanBeers = beersList.map(beer => `${beer} - San Tan Brewing`)

console.log(sanTanBeers) // ['Juicy Jack - San Tan Brewing', 'Stoney Hazy - San Tan Brewing', 'PebbleHead - San Tan Brewing', 'IPA - San Tan Brewing']
```

### Array method .pop()

Removes the last element from an array and returns that element. This method changes the length of the array.

```
const beersList = ['Juicy Jack', 'Stoney Hazy', 'PebbleHead']
const lastBeer = beersList.pop()

console.log(lastBeer) // PebbleHead
```

### Array method push()

Adds one or more elements to the end of an array and returns the new length of the array.

```
const beersList = ['Juicy Jack', 'Stoney Hazy', 'PebbleHead']
beersList.push('MoonJuice', 'Devil\'s Ale')

console.log(beersList) // ["Juicy Jack", "Stoney Hazy", "PebbleHead", "MoonJuice", "Devil's Ale"]
```

### Array method .reduce()

Executes a user-supplied "reducer" callback function on each element of the array, in order, passing the return value from the calculation on the preceding element.

```
const values = [1, 2, 3, 4]
const sumValue = values.reduce((prevValue, currentValue) => prevValue + currentValue)

console.log(sumValue) // 10
```

### Array method shift()

Removes the first element from an array and returns that element. This method changes the length of the array.

```
const beersList = ['Juicy Jack', 'Stoney Hazy', 'PebbleHead']
const firstBeer = beersList.shift()

console.log(firstBeer) // Juicy Jack
console.log(beersList) // ['Stoney Hazy', 'PebbleHead']
```

### Array method slice()

Returns a shallow copy of a portion of an array into a new array selected from start to end, end not included.

```
const beersList = ['Juicy Jack', 'Stoney Hazy', 'PebbleHead', 'MoonJuice']
const firstBeer = beersList.slice(1, 3)

console.log(firstBeer) // ['Stoney Hazy', 'PebbleHead']
```

### Array method some()

Tests whether at least one element in the array passes the test implemented by the provided function, returns true if true, false if false.

```
const grades = [90, 92, 85, 72, 78, 94]
const lowGrade = grades.some(grade => grade < 70)

console.log(lowGrade) // false
```

### Array method sort()

sorts the elements of an array in-place and returns the sorted array. Default order is ascending, converting elements into strings, then comparing their sequences of UTF-16 code units values.

```
const grades = [1, 10, 2, 90, 92, 85, 72, 78, 94]
const sortedGrades = grades.sort((a, b) => a - b)

console.log(sortedGrades) // [1, 2, 10, 72, 78, 85, 90, 92, 94]
```

### Array method toString()

Returns a string representing the specified array.

```
const grades = [1, 10, 2, 90, 92, 85, 72, 78, 94]
const stringGrades = grades.toString()

console.log(stringGrades) // 1,10,2,90,92,85,72,78,94
```

### Array method unshift()

Adds one or more elements to the beginning of an array and returns the new length of the array.

```
const grades = [1, 10, 2, 90, 92, 85, 72, 78, 94]
grades.unshift(100)

console.log(grades) // [100, 1, 10, 2, 90, 92, 85, 72, 78, 94]
```

## Operators

### Spread syntax (...)

Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```
const sentenceArr = ['My', 'name', 'is', 'Jack']

console.log(sentenceArr) // ['My', 'name', 'is', 'Jack']
console.log(...sentenceArr) // My name is Jack
```

```
// better way to create array literals
const parts = ['shoulders', 'knees']
const fullBody = ['head', ...parts, 'and', 'toes']

console.log(fullBody) // ['head', 'shoulders', 'knees', 'and', 'toes']
```

## Object

### Object method assign()

Copies all enumerable own properties from one or more source objects to a target object. Returns the modified target object.

```
const car = {
  wheels: 4,
  doors: 4,
  noise: 'vroom'
}

const truck = Object.assign({}, car)
truck.doors = 2

console.log(car) // {wheels: 4, doors: 4, noise: 'vroom'}
console.log(truck) // {wheels: 4, doors: 2, noise: 'vroom'}
```

### Object method entries()

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

const carEntries = Object.entries(car)

console.log(carEntries) // (3) [Array(2), Array(2), Array(2)]
```

### Object method .freeze()

Freezes and object, a frozen object can no longer be changed; freezing prevents new properties from being added, existing properties from being removed, prevents values of existing properties from being changed.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

Object.freeze(car)
car.wheels = 3

console.log(car) // {wheels: 5, doors: 4, noise: 'vroom'}
```

### Object method .is()

Determines whether two values are the same value.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

console.log(Object.is(car.wheels, 5)) // true
```

### Object method .isFrozen()

Determines if an object is frozen.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

Object.freeze(car)
car.wheels = 3

console.log(Object.isFrozen(car)) // true
```

### Object method .keys()

Returns an array of a given objects own enumerable property names.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

console.log(Object.keys(car)) // ['wheels', 'doors', 'noise']
```

### Object method .hasOwnProperty()

Returns a boolean indicating whether the object has the specified property as it's own property.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

console.log(car.hasOwnProperty('wheels')) // true
```

### Object method .values()

Returns an array of a given object's own enumerable property values.

```
const car = {
  wheels: 5,
  doors: 4,
  noise: 'vroom'
}

console.log(Object.values(car)) // [5, 4, 'vroom']
```

## Math

### Math method round()

Returns the value of a number rounded to the nearest integer.

```
const gpa = 3.4
const roundedGpa = Math.round(gpa)

console.log(roundedGpa) // 3
```

### Math method pow()

Given two arguments, base and exponent, returns a number representing the given base taken to the power of the given exponent.

```
const base = 5
const exponent = 3
const result = Math.pow(base, exponent)

console.log(result) // 125
```

### Math method sqrt()

Returns the square root of a number.

```
const num = 25
const squareRoot = Math.sqrt(num)

console.log(squareRoot) // 5
```

### Math method ceil()

Rounds a number up to the next largest integer.

```
const money = 0.93
const generousMoney = Math.ceil(money)

console.log(generousMoney) // 1
```

### Math method floor()

Returns the largest integer less than or equal to a given number.

```
const money = 1.93
const scroogeMoney = Math.floor(money)

console.log(scroogeMoney) // 1
```

### Math method min()

Returns the lowest-valued number passed to it, or NaN if any parameter isn't a number and can't be converted into one.

```
const classGrades = [99, 100, 89, 77, 63, 85]
const lowestGrade = Math.min(...classGrades)

console.log(lowestGrade) // 63
```

### Math method max()

Returns the lowest-valued number passed to it, or NaN if any parameter isn't a number and can't be converted into one.

```
const classGrades = [99, 100, 89, 77, 63, 85]
const lowestGrade = Math.max(...classGrades)

console.log(lowestGrade) // 100
```

### Math method random()

Returns a floating-point pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).

```
const randomZeroToNine = Math.floor(Math.random() * 10)

console.log(randomZeroToNine) // random number 0 to 9
```

```
const randomZeroToTen = Math.floor(Math.random() * 10) + 1

console.log(randomZeroToTen) // random number 0 to 10
```

## Algorithm Challenges

### Challenge: Add Two Numbers

---

`Write a function that takes in two numbers and adds them together`

```
const addTwoNumbers = (num1, num2) => num1 + num2

console.log(addTwoNumbers(5, 6))
console.log(addTwoNumbers(10, 0))
```

### Challenge: Introduction

---

`Write a function that takes in two strings and returns them in a introduction paragraph`

```
const introductionParagraph = (firstName = 'Friend', lastName = 'Friendly') =>
  `Hi, my name is ${firstName} ${lastName}`

console.log(introductionParagraph('Adam'))
console.log(introductionParagraph('Adam', 'Gonzales'))
```

### Challenge: Convert Celsius to Fahrenheit

---

`Convert Celsius to Fahrenheit`

```
const convertCelsiusToFahrenheit = (celsius) => celsius * 1.8 + 32

console.log(convertCelsiusToFahrenheit(30))
console.log(convertCelsiusToFahrenheit(-30))
console.log(convertCelsiusToFahrenheit(0))
```

### Challenge: FizzBuzz

---

`If a number is divisible by 3, return 'fizz', if divisible by 5, return 'buzz', divisible by 3 and 5, return 'fizzbuzz', else return nothing`

```
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  } else if (num % 3 === 0) {
    return 'fizz'
  } else if (num % 5 === 0) {
    return 'buzz'
  }
  return ''
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(4))
console.log(fizzBuzz(15))
```

### Challenge: Factorial

---

`Take a number and return the factorial`

```
const getFactorial = (num) => {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result = result * i
  }
  return result
}

console.log(getFactorial(5)) // 120
console.log(getFactorial(4)) // 24
console.log(getFactorial(0)) // 1
console.log(getFactorial(10)) // 3628800
```

### Challenge: Reverse a String

---

`Take in a string and reverse it's value`

```
const reverseString = (string) => {
  return string.split('').reverse().join('')
}

console.log(reverseString('practice practice practice'))
console.log(reverseString('javascript'))
```

### Challenge: Palindrome

---

`take in a string, ignore special characters, spaces, and underscores, make case insensitive, and check if is palindrome`

```
const palindrome = (string) => {
  const cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reverseString = cleanString.split('').reverse().join('')

  return reverseString === cleanString
}

console.log(palindrome('A man, a plan, a canal. Panama.')) // true
console.log(palindrome('My age is 0, 0 si ega ym.')) // true
console.log(palindrome('legendary')) // false
console.log(palindrome('.O_O(:/-:)O-O')) // true
```

### Challenge: Longest Length

---

`take in a string, return the length of the longest string`

```
const getLongestString = (string) => {
  const longestString = string
    .split(' ')
    .sort((word1, word2) => {
      return word1.length - word2.length
    })
    .pop().length

  return longestString
}

console.log(getLongestString('I am learning to code'))
console.log(getLongestString('I would like to work for Gooooogle'))
console.log(getLongestString("Ain't no fun if the homie don't code none"))
```

### Challenge: Title Case

---

`Take in a string, capitalize the first letter of each word`

```
const titleCaseString = (string) => {
  const updatedString = string
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
  return updatedString
}

console.log(titleCaseString('I am a going to be successful'))
console.log(titleCaseString('I would like to work for Google'))
```

### Challenge: Repeat String

---

`Take in a string and a number, repeat the string X number of times`

```
const stringRepeater = (string, amount) => {
  let repeatedString = ''
  for (let i = 0; i <= amount - 1; i++) {
    repeatedString += string
  }

  return repeatedString
}

console.log(stringRepeater('codinggod', 2))
```

```
const stringRepeater = (string, amount) => {
  return string.repeat(amount)
}

console.log(stringRepeater('codinggod', 2))
```

### Challenge: Is Digit

---

`Take in a string and return whether or not it is a digit`

```
const checkIfDigit = (text) => {
  return !!text.match('^[0-9]+$')
}

console.log(checkIfDigit('1'))
console.log(checkIfDigit('33435'))
console.log(checkIfDigit('d34'))
console.log(checkIfDigit('d'))
```

### Challenge: Longest Word

---

`Take in a string, return the largest word`

```
const getLongestWord = (string) => {
  const longestWord = string
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .sort((a, b) => {
      return a.length - b.length
    })
    .pop()
  return longestWord
}

console.log(getLongestWord('Ready, steady, go!')) // steady
console.log(getLongestWord('Ready[[[, steady, go!')) // steady
console.log(getLongestWord("I'm so excited, I can wait to meet you there")) // excited
console.log(getLongestWord('ABCd')) // ABCd
```

### Challenge: Valid Time

---

`Take in a string, return whether it is a valid time or not`

```
const isValidTime = (time) => {
  const [hours, minutes] = time.split(':')
  if (hours > 23 || minutes > 59) {
    return false
  }
  return true
}

console.log(isValidTime('24:00')) // false
console.log(isValidTime('23:31')) // true
console.log(isValidTime('22:00')) // true
console.log(isValidTime('22:66')) // false
```

### Challenge: Missing Number

---

`Take in an array of numbers, find the number that is missing between 0 and the highest value in the array`

```
const findMissingNumber = (numberArray) => {
  const sortedArray = numberArray.sort()
  for (let i = 0; i < sortedArray.length; i++) {
    if (i !== sortedArray[i]) {
      return i
    }
  }
}

console.log(findMissingNumber([0, 3, 5, 8, 4, 6, 1, 9, 7]))
console.log(findMissingNumber([1, 2, 5, 0, 6, 7, 9, 3, 4]))
console.log(findMissingNumber([0, 2, 3, 4]))
```

### Challenge: Duplicate Numbers

---

`Take in an array of numbers, return whether there are any duplicate numbers`

```
const duplicateNumbersPresent = (numberArray) => {
  const sortedArray = numberArray.sort()
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true
    }
  }
  return false
}

console.log(duplicateNumbersPresent([1, 2, 3, 1]))
console.log(duplicateNumbersPresent([3, 1]))
console.log(duplicateNumbersPresent([0, 4, 5, 0, 3, 6]))

```

### Challenge: Digit Sum

---

`Take a string, parse out the numbers and add them together`

```
const sumOfNumbers = (string) => {
  let sum = 0
  const numbersArray = string.match(/\d+/g) || []

  numbersArray.forEach((num) => {
    sum += Number(num)
  })

  return sum
}

console.log(sumOfNumbers('2 apples, 12 oranges'))
console.log(sumOfNumbers('123450'))
console.log(sumOfNumbers('Your payment method is invalid'))
```

### Challenge: First Duplicate

---

`Take an array of positive numbers and return the first number that is duplicated. Return -1 if no duplicates are found`

```
const firstDuplicate = (numbersArray) => {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray.lastIndexOf(numbersArray[i]) !== i) {
      return numbersArray[i]
    }
  }
  return -1
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]))
console.log(firstDuplicate([6, 6]))
console.log(firstDuplicate([2, 1, 3]))
console.log(firstDuplicate([3, 1, 4, 3, 1]))
```

### Challenge: Amend the Sentence

---

`Take in a string that has no spaces but has words denoted with capital letters and return a lower-case spaced-out string`

```
const fixSentence = (string) => {
  const sentence = string.split(/(?=[A-Z])/).join(' ')
  return sentence
}

console.log(fixSentence('CodingIsAFunTime!')) // Coding Is A Fun Time!
console.log(fixSentence("I'llBeThere.")) // I'll Be There.
```

### Challenge: Sum of Differences

---

`Take in an array with two positive numbers and find the sum of all the numbers including and between the two`

```
const sumAllNumbers = (numberArray) => {
  const upperLimit = Math.max(...numberArray)
  const lowerLimit = Math.min(...numberArray)
  let sum = 0
  for (let i = lowerLimit; i <= upperLimit; i++) {
    sum += i
  }
  return sum
}

console.log(sumAllNumbers([10, 5]))
console.log(sumAllNumbers([3, 7]))
console.log(sumAllNumbers([10, 1]))
```

### Challenge: Unique Values

---

`Take in two arrays and return an array of the unique values`

```
const getUniqueValues = (array1, array2) => {
  const uniqueArray = []
  for (const value of array1) {
    if (!array2.includes(value) && !uniqueArray.includes(value)) {
      uniqueArray.push(value)
    }
  }

  for (const value of array2) {
    if (!array1.includes(value) && !uniqueArray.includes(value)) {
      uniqueArray.push(value)
    }
  }

  return uniqueArray
}

console.log(getUniqueValues([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [4]
console.log(getUniqueValues([1, 'calf', 3, 'piglet'], [7, 'filly'])) // [1, 'calf', 3, 'piglet', 7, 'filly']
console.log(getUniqueValues([2, 1, 3], [3, 2, 1])) // []

```

### Challenge: Add Up Digits

---

`Take in a number, return the sum of it's digits`

```
const sumDigits = (number) => {
  const numberArray = Array.from(String(number))
  let numberSum = 0
  for (let i = 0; i < numberArray.length; i++) {
    numberSum += Number(numberArray[i])
  }
  return numberSum
}

console.log(sumDigits(29)) // 11
console.log(sumDigits(48)) // 12
console.log(sumDigits(111)) // 3
```

```
const sumDigits = (number) => {
  const numberSum = number
    .toString()
    .split('')
    .reduce((num1, num2) => Number(num1) + Number(num2))
  return numberSum
}

console.log(sumDigits(29)) // 11
console.log(sumDigits(48)) // 12
console.log(sumDigits(111)) // 3
console.log(sumDigits(5)) // 5
```
