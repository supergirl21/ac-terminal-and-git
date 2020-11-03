var radius = parseInt(prompt("What is the radius of the cirle?"));

function circleCalculation(radius) {
  var circumference = 2 * Math.PI * radius;
  var area = Math.PI * Math.pow(radius, 2);
  var sentence =
    "The area of the circle is " +
    Math.round(circumference) +
    " and the perimeter of the circle is  " +
    Math.round(area) +
    ".";

  console.log(sentence);
}
circleCalculation(radius);
