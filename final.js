/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var divide = area / 2;

console.log(divide);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 45000) {
    console.log("Laptop");

}else if (money >= 10000) {
    console.log("Cycle");
}else{
    console.log("Chocolate");
}


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


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if (
  (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx"))) {
    console.log("Store");
} else {
  console.log("Delete");
}



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"};
//write your code here

var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';

console.log(email);



/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here



var starting = startingSalary;

for (var i = 1; i <= experience; i++) {
  starting = starting += (starting * 0.05);
}

console.log(starting.toFixed(2));
