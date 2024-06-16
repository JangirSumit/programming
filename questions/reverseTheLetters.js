var input = "I drive with Bolt";

function revereseWords(input) {
  var array = input.join("").split(" ");

  for (let index = 0; index < array.length; index++) {
    array[index] = array[index].split("").reverse();
  }
  return array.join(" ");
}

console.log(revereseWords(input.split("")));
