/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here

if (
  (fileName[0] === ("#") || fileName.slice(-4) === (".pdf") || fileName.slice(-5) === (".docx"))) {
    console.log("Store");
} else {
  console.log("Delete");
}
