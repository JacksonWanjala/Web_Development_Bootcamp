// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    
 const daysOfTheWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday']
    
    if (num < 1 || num > 7) {
    return null;
    } else {
    return daysOfTheWeek[num - 1];
}

}
