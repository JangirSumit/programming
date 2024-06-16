function fn1() {
  console.log("fn11");
  setTimeout(() => {
    console.log("fn12");
  }, 0);
  console.log("fn13");
}

function fn2() {
  console.log("fn21");
  setTimeout(() => {
    console.log("fn22");
  }, 0);
  console.log("fn23");
}

console.log(1); //1
fn1(); //fn11, fn13, fn12
console.log(2); //2
fn2(); //fn21, fn23, fn22
console.log(3); //3
