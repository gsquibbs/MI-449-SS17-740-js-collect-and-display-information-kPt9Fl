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

  rawPreview.textContent = 'Hi, my name is ' +
  first + ' ' + last + '! ' + describe + ' If you are interested in a date, you can email me at ' + email + 'or give me a call at ' + number + '.'
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
  var describe = describeText.vallue

  livePreview.innerHTML = 'Hi, my name is ' + first + ' ' + last + '! ' + describe + ' If you are intereed in a date, you can email me at ' + email + 'or give me a call at ' + number + '.'
}

firstInput.addEventListener('input', updatelivePreview)
lastInput.addEventListener('input', updatelivePreview)
emailInput.addEventListener('input', updatelivePreview)
numberInput.addEventListener('input', updatelivePreview)
describeText.addEventListener('input', updatelivePreview)
