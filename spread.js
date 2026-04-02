//spreads an array into separate arguments i.e separates the contents//
Math.max(13,4,5,21,3,3,1,2,7,6,4,2,53456)//this will return 53456 in the console
Math.min(2,5,1,)//this will return 1

//to use spread
const nums=[13,4,5,21,3,3,1,2,7,6,4,2,53456]
Math.max(...nums)//the three dots represent the spread
//using spread to combine arrays
const cats=["Blue","Scout","Rocket"];
const dogs=["Rusty","Wyatt"]
const allPets=[...cats,...dogs]//this displays all the contents of array cats and array dogs
