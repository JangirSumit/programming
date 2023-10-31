console.log("a");
setTimeout(function a() {
  console.log("b");
}, 0);
Promise.resolve().then(function b() {
  console.log("c");
});
console.log("d");

//a
//d
//c
//a