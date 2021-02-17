document.getElementById('calculate').addEventListener('click', area)
document.getElementById('calculate').addEventListener('click', checker)

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

function checker () {
  let sideone = document.getElementById('side-one').value
  sideone = parseInt(sideone)
  let sidetwo = document.getElementById('side-two').value
  sidetwo = parseInt(sidetwo)
  let height = document.getElementById('height').value
  height = parseInt(height)
  if (sideone <= 0) {
  document.getElementById('result').innerHTML = 'Only Positives! Please try again'
  } else if (sidetwo <= 0) {
  document.getElementById('result').innerHTML = 'Only Positives! Please try again'
  } else if (height <= 0) {
  document.getElementById('result').innerHTML = 'Only Positives! Please try again'
} 
}
