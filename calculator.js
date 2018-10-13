function add(numbers){
  if(numbers == "")
  return 0;
  
  // If there is a seperator in the number string:
  if(numbers.includes(","))
  {
    // split on \n and comma: 
    var numberArray = numbers.split(/[\n\","]/);

/* --------------------------------
  Tried to implement the 8th test: 
  if(numberArray[0].includes("//"))
    {
      var customDelimeter = numberArray[0].split(/["//"]/)
      for(var i = 0; i < numberArray.length; i++)
      {
        numberArray.split(/[\n\","\customDelimeter]/);
      }
    }
   -------------------------------- */
   
    // Removing all numbers bigger than 1000:
    biggerThanThousand(numberArray);

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

// Removes all numbers bigger than 1000 from array: 
function biggerThanThousand(numberArray)
{
  for(var i=0 ; i < numberArray.length ; i++)
  {
    if(numberArray[i] > 1000)
    {
      // Removing the element over 1000 with splice function:
      numberArray.splice(i, 1);
    }
  }

} 



module.exports = add;