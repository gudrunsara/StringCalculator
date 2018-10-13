function add(number){
  if(number == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(number.includes(","))
  {
    var numberArray = number.split(",")
    // return the sum of the two numbers:
    return parseInt(numberArray[0]) + parseInt(numberArray[1]);
  }
  else
    // parseInt function casts from string to Int
    return parseInt(number); 
}

module.exports = add;