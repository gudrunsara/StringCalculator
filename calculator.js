function add(numbers){
  if(numbers == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(numbers.includes(","))
  {
    // split on \n and comma: 
    var numberArray = numbers.split(/[\n\","]/);

    // Checking for negative numbers:
    negativeNrsArray = negativeNumbers(numberArray);

    // if the negative array is empty (includes no negative numbers):
    if(!negativeNrsArray.length)
    {
      return sum(numberArray);
    }
    else 
      return "Negatives not allowed: " + negativeNrsArray.toString();
  }
  else
    // parseInt function casts from string to Int:
    return parseInt(numbers); 
}

// returns the sum of an number array: 
function sum(numberArray)
{
  var total = 0;
  for(var i=0 ; i < numberArray.length ; i++)
  {
    total += parseInt(numberArray[i]);
  }
  return total;
}

// Returns an array with all negative numbers in an given array:
function negativeNumbers(numberArray)
{
  var negativeArray = [];
  for(var i=0 ; i < numberArray.length ; i++)
  {
    if(numberArray[i] < 0)
    {
      negativeArray[i] = numberArray[i];
    }
  }
  return negativeArray;
}

module.exports = add;