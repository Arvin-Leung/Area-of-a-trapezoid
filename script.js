// Line below activates the function to calculate the area when the user clicks the button
document.getElementById('calculate').addEventListener('click', area)

/* The function below collects the inputs and stores them as variables. Next it calculates the area and displays it */
function area () {
  let sideone = document.getElementById('side-one').value
  sideone = parseInt(sideone)
  let sidetwo = document.getElementById('side-two').value
  sidetwo = parseInt(sidetwo)
  let height = document.getElementById('height').value
  height = parseInt(height)
  let area = sideone + sidetwo
  area = area / 2 * height
  document.getElementById('result').innerHTML = 'Your area is ' + area
}
