# info-overlay
Display information for your app via a subtle icon which activates an overlay.

# Quick Demo

```
git clone git@github.com:voltrevo/info-overlay.git
cd info-overlay
npm install
npm run demo
```

Visit [http://localhost:8080/](http://localhost:8080/)

# Usage

`npm install --save info-overlay`

```
'use strict'

var InfoOverlay = require('info-overlay')

window.addEventListener('load', function() {
  var infoOverlay = InfoOverlay()

  infoOverlay.overlay.innerHTML = (
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue ' +
    'ante. Nulla ultrices orci vehicula molestie facilisis. Aenean auctor a magna ' +
    'elementum auctor. Ut ligula nunc, molestie a viverra id, commodo at nisi. ' +
    'Vivamus fermentum non nibh nec ullamcorper.'
  )

  document.body.style.backgroundColor = '#0ff'
  document.body.appendChild(infoOverlay.icon)
})
```
