var firstInput = document.getElementById('first')
var lastInput = document.getElementById('last')
var emailInput = document.getElementById('email')
var numberInput = document.getElementById('number')
var rawPreview = document.getElementById('raw')
var livePreview = document.getElementById('live')
var describeText = document.getElementById('describe')

var greetUser = function () {
  var greeting = 'Hi my name is ' + firstInput.value + ' ' + lastInput.value + '!'
  var description = describeText.value
  var info = 'If you are interested in a date, you can email me at <a href="mailto:' + emailInput.value + '" target="_blank">' + emailInput.value + '</a> ' + 'or give me a call at ' + '<a href="tel:' + numberInput.value + '" target="_blank">' + numberInput.value + '</a>.'

  rawPreview.textContent = '<h1>' + greeting + '</h1>' + '<p>' + description + '</p>' + '<p>' + info + '</p>'
  livePreview.innerHTML = '<h1>' + greeting + '</h1>' + '<p>' + description + '</p>' + '<p>' + info + '</p>'
}

firstInput.addEventListener('input', greetUser)
lastInput.addEventListener('input', greetUser)
describeText.addEventListener('input', greetUser)
emailInput.addEventListener('input', greetUser)
numberInput.addEventListener('input', greetUser)
