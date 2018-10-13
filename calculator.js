function add(number){
  if(number == "")
  return 0;
  
  // make number an int instead of a string:
  return parseInt(number); 
}

module.exports = add;