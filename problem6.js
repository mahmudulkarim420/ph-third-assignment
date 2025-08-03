/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here



var starting = startingSalary;

for (var i = 1; i <= experience; i++) {
  starting = starting += (starting * 0.05);
}

console.log(starting.toFixed(2));





// var starting = startingSalary;

// for(var i = 1; i <= experience; i++) {
//     starting = starting + (starting * 0.5);
// }

// console.log(starting.toFixed(2));