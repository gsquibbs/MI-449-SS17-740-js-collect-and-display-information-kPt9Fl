var firstInput = document.getElementById('first')
var lastInput = document.getElementById('last')
var emailInput = document.getElementById('email')
var numberInput = document.getElementById('number')
var rawPreview = document.getElementById('raw')
var livePreview = document.getElementById('live')
var describeText = document.getElementById('describe')

var datingProfile = function () {
  var profile =
    '<h1> Hi my name is ' +
    firstInput.value + ' ' + lastInput.value + '!</h1>' +
    '<p>' + describeText.value + '</p>' +
    '<p> If you are interested in a date, you can email me at <a href="mailto:' +
    emailInput.value + '" target="_blank">' +
    emailInput.value + '</a> ' +
    'or give me a call at <a href="tel:' + numberInput.value +
    '" target="_blank">' + numberInput.value + '</a></p>'

  rawPreview.textContent = profile
  livePreview.innerHTML = profile
}

firstInput.addEventListener('input', datingProfile)
lastInput.addEventListener('input', datingProfile)
describeText.addEventListener('input', datingProfile)
emailInput.addEventListener('input', datingProfile)
numberInput.addEventListener('input', datingProfile)
