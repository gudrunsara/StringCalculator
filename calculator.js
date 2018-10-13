function add(numbers){
  if(numbers == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(numbers.includes(","))
  {
    // split on \n and comma: 
    var numberArray = numbers.split(/[\n\","]/);
    return sum(numberArray);
  }
  else
    // parseInt function casts from string to Int
    return parseInt(numbers); 
}

function sum(numberArray)
{
  var total = 0;
  for(var i=0 ; i < numberArray.length ; i++)
  {
    total += parseInt(numberArray[i]);
  }
  return total;
}

module.exports = add;