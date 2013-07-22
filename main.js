$(window).on('devicelight', function(event) {
  var luminosidade = event.originalEvent.value
  console.log(luminosidade)

  if (luminosidade <= 10) {
    $('.lampada').addClass('lampada--is-acesa')
  } else {
    $('.lampada').removeClass('lampada--is-acesa')
  }
})

if (!('ondevicelight' in window)) {
  console.log('seu navagador nao suporta device light')
}
