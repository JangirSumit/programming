let obj = {
  a: "a",
};

obj.addEventListener("addProp", function (event) {
  console.log(event);
});

obj.disptachEvent(
  new CustomEvent("addProp", {
    detail: {
      prop: "b",
      value: "b",
    },
  })
);
