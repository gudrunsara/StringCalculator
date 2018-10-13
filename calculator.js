function add(numbers){
  if(numbers == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",")
    // return the sum of the two numbers:
    return parseInt(numberArray[0]) + parseInt(numberArray[1]);
  }
  else
    // parseInt function casts from string to Int
    return parseInt(numbers); 
}

module.exports = add;