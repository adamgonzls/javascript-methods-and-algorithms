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
