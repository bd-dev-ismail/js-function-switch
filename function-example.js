// function functionName(parameters){
//     //function body
//     //return
// }
// //call function
// var returnedValue = functionName(parameters value);
function avgerage(assignment1, assignment2, assignment3){
    const toalAvg = assignment1 + assignment2 + assignment3;
    const avg = toalAvg / 3;
    return avg;
}
let marks1 = 60;
let marks2 = 59;
let marks3 = 58;
const scic = avgerage(marks1, marks2, marks3);
console.log('My Average Marks is: ', scic);