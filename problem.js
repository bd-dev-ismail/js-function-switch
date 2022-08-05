//1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.
function foo(){
  function bar(){
    console.log('bar');
  }
    bar();
    console.log('foo');
}
foo();
//Write a function called make_avg() which will take an three integers and return the
// average of those values.

function make_avg(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let avg = sum / 3;
    console.log('Total Avg of three integers:' , avg);
}
    let int1 = 58;
    let int2 = 60;
    let int3 = 59;
    make_avg(int1, int2, int3);