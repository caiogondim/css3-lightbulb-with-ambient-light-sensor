$(window).on('devicelight', function(event) {
  var luminosidade = event.originalEvent.value
  console.log(luminosidade)

  if (luminosidade <= 10) {
    $('body').addClass('lampada--is-acesa')
  } else {
    $('body').removeClass('lampada--is-acesa')
  }
})

if (!('ondevicelight' in window)) {
  console.log('seu navagador nao suporta device light')
}
