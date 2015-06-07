'use strict'

var delay = require('./delay')
var getOutsideClick = require('./getOutsideClick')
var infoIcon = require('info-icon')
var infoOverlay = require('./overlay.html')

require('./overlay.css')

module.exports = function() {
  var icon = infoIcon()
  var overlay = infoOverlay()

  var active = false

  icon.addEventListener('click', function() {
    if (active) {
      return
    }

    active = true

    document.body.appendChild(overlay)

    delay(50).then(function() {
      overlay.style.opacity = 0.8
      return getOutsideClick(overlay)
    }).then(function() {
      overlay.style.opacity = 0
      return delay(550)
    }).then(function() {
      document.body.removeChild(overlay)
      active = false
    })
  })

  return {
    icon: icon,
    overlay: overlay
  }
}
