const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());

}

function fuzzyMatch(drivers, string) {
    let stringLength = string.length;
    return drivers.filter(driver => driver.slice(0, stringLength) === string);
}
console.log(fuzzyMatch(drivers, 'Sa'));

function matchName(driversObj, string) {
    
    return driversObj.filter(driver => driver.name === string)
}
const driverObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(matchName(driverObj, 'Bobby'));
