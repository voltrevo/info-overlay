'use strict'

var infoIcon = require('info-icon')

require('./overlay.css')
var infoOverlay = require('./overlay.html')

module.exports = function() {
  var icon = infoIcon()
  var overlay = infoOverlay()

  var active = false
  var clickCounter = 0

  var activate = function() {
    icon.removeEventListener('click', activate)
    active = true
    clickCounter = 1

    document.body.appendChild(overlay)
    setTimeout(function() {
      overlay.style.opacity = 0.8
    }, 50)
  }

  var deactivate = function() {
    overlay.style.opacity = 0
    active = false
    setTimeout(function() {
      document.body.removeChild(overlay)
      icon.addEventListener('click', activate)
    }, 550)
  }

  overlay.addEventListener('click', function() {
    clickCounter++
  })

  window.addEventListener('click', function() {
    if (!active) {
      return
    }

    clickCounter--

    if (clickCounter < 0) {
      deactivate()
    }
  })

  icon.addEventListener('click', activate)

  return {
    icon: icon,
    overlay: overlay
  }
}
