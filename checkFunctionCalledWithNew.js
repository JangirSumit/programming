function Employee() {
  if (new.target) {
    console.log("Called with New");
  } else {
    console.log("Called without New");
  }
}

Employee();
new Employee();
