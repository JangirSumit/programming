function getValue() {
  var start = new Date().getTime();
  for (let index = 0; index < 1000000000; index++) {}
  var end = new Date().getTime();

  return end - start;
}

self.addEventListener("message", async function (params) {
  var data = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((response) => response.json());
  setInterval(() => {
    postMessage(data);
  }, 5000);
});
