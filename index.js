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
