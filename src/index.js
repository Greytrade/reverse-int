module.exports = function reverse(n) module.exports = function reverse(n) {
    function reverseNumber(num){
        return Number(String(num).split("").reverse().join(""))
      }
