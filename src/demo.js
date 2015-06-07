'use strict'

var iconOverlay = require('./index')

window.addEventListener('load', function() {
  document.body.style.backgroundColor = 'blue'
  document.body.appendChild(iconOverlay().icon)
})
