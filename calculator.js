function add(numbers){
  if(numbers == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    var total = 0;
    for(var i=0 ; i < numberArray.length ; i++)
    {
      total += parseInt(numberArray[i]);
    }
    return total;
    // return the sum of the two numbers:
    //return parseInt(numberArray[0]) + parseInt(numberArray[1]);
  }
  else
    // parseInt function casts from string to Int
    return parseInt(numbers); 
}

module.exports = add;