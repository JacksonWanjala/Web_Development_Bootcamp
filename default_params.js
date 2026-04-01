//function with default parameter//
function rollDie(numSides=6){
  return Math.floor(Math.random()*numSides)+1
}
//function with parameters that are not default//
function greet(msg,person){
  console.log '${msg},${person}!'//thisline calls the function to print the content//
}
