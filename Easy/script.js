function exercise(activity) {
  return function () {
    return `Today's exercise: ${activity}`;
  };
}

var run = exercise("running");
var swim = exercise("swimming");

console.log(run());
console.log(swim());
