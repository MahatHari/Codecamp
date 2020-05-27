function convertToRoman(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  var romanized = "";
  /*
    For to change eact number with its corresponding roman numerals from list above
    decimal value and romanNumeral value have same index for same value, eg 1 =I both have index
    of 0, 
    using while loop we check if there is equal or smaller decimal value in decimal value index
    when match is found we put its corresponding roman numeral to romanized and concatenate it 
    then the decimal num is reduced from num parameter and next iteration until 0 is not reached 
    */
  for (let i = 0; i <= decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num = num - decimalValue[i];
    }
  }
  return romanized;
}

//Testing

convertToRoman(798); //should return "DCCXCVIII"
