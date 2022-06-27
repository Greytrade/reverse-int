function reverseNumber(num){
  return Number(String(num).split("").reverse().join(""))
}

console.log(reverseNumber(123))
