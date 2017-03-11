var lastInput = document.getElementById('last')
var firstInput = document.getElementById('first')
var emailInput = document.getElementById('email')
var numberInput = document.getElementById('number')
var rawPreview = document.getElementById('raw')
var livePreview = document.getElementById('live')
var describeText = document.getElementById('describe')

var updaterawPreview = function () {
  var first = firstInput.value
  var last = lastInput.value
  var email = emailInput.value
  var number = numberInput.value
  var describe = describeText.value

  rawPreview.textContent = '<h1>' + 'Hi, my name is ' + first + ' ' + last + '!' + '</h1>' +
  '<p>' + describe + '</p>' +
  '<p>' + ' If you are interested in a date, you can email me at ' +
  '<a href="mailto:email" target="_blank">' + email + '</a>' +
  ' or give me a call at ' +
  '<a href="tel:number"target="_blank">' + number + '</a>' + '.' +
  '</p>'
}

firstInput.addEventListener('input', updaterawPreview)
lastInput.addEventListener('input', updaterawPreview)
emailInput.addEventListener('input', updaterawPreview)
numberInput.addEventListener('input', updaterawPreview)
describeText.addEventListener('input', updaterawPreview)

var updatelivePreview = function () {
  var first = firstInput.value
  var last = lastInput.value
  var email = emailInput.value
  var number = numberInput.value
  var describe = describeText.value

  livePreview.innerHTML = '<h1>' + 'Hi, my name is ' + first + ' ' + last + '!' + '</h1>' +
  '<p>' + describe + '</p>' +
  '<p>' + ' If you are interested in a date, you can email me at ' +
  '<a href="mailto:email" target="_blank">' + email + '</a>' +
  ' or give me a call at ' +
  '<a href="tel:number"target="_blank">' + number + '</a>' + '.' +
  '</p>'
}

firstInput.addEventListener('input', updatelivePreview)
lastInput.addEventListener('input', updatelivePreview)
emailInput.addEventListener('input', updatelivePreview)
numberInput.addEventListener('input', updatelivePreview)
describeText.addEventListener('input', updatelivePreview)
