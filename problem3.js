/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(var lastDay=1; lastDay <= 6; lastDay++) {
    if(lastDay %  3 === 0) {
        console.log(lastDay + ' - medicine');
    }else{
        console.log(lastDay + ' - rest');
    }
}