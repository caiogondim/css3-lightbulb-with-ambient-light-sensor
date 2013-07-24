window.addEventListener('devicelight', function(event) {
  var iluminacao = event.value

  if (iluminacao <= 10) {
    document.body.classList.add('lightbulb--is-on')
  } else {
    document.body.classList.remove('lightbulb--is-on')
  }
})

if (!('ondevicelight' in window)) {
  document
    .querySelector('.modal')
    .classList
    .add('modal--is-visible')
}

