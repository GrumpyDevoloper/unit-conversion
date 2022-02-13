var unit = document.getElementById("unit");
var length = document.getElementById("length");
var volume = document.getElementById("volume");
var mass = document.getElementById("mass");
var number = document.getElementById("number");

function getNumberValue() {
  var numberValue = number.value;
  if (numberValue > 0);
  {
    document.getElementById("unit").textContent = numberValue;
    doTheMath();
  }
}

function doTheMath() {
  length.textContent =
    unit.textContent +
    " " +
    "Meters = " +
    (unit.textContent * 3.281).toFixed(3) +
    " Feet | " +
    unit.textContent +
    " Feet = " +
    (unit.textContent / 3.281).toFixed(3) +
    " Meters";
  volume.textContent =
    unit.textContent +
    " " +
    "Litres = " +
    (unit.textContent / 3.785).toFixed(3) +
    " Gallons | " +
    unit.textContent +
    " Gallons = " +
    (unit.textContent * 3.785).toFixed(3) +
    " Litres";
  mass.textContent =
    unit.textContent +
    " " +
    "Kilograms = " +
    (unit.textContent * 2.205).toFixed(3) +
    " Pounds | " +
    unit.textContent +
    " Pounds = " +
    (unit.textContent / 2.205).toFixed(3) +
    " Kilograms";
}
