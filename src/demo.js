'use strict'

var loremIpsum = require('./lorem-ipsum.html')
var IconOverlay = require('./index')

var windowLoaded = new Promise(function(resolve) {
  window.addEventListener('load', resolve)
})

windowLoaded.then(function() {
  document.body.style.background = (
    'url(https://lh3.googleusercontent.com/-1xZqgaRDIec/Tg1dMJq1vBI/AAAAAAAAALc/7m0Tpv2htVc/s1920-w1920-h1080-c/071227-4144-PtLomaReef.jpg)'
  )

  document.body.style.backgroundSize = 'cover'

  var iconOverlay = IconOverlay()

  document.body.appendChild(iconOverlay.icon)

  iconOverlay.overlay.innerHTML = loremIpsum().innerHTML

  document.body.style.height = '300vh'
})
