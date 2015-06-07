'use strict'

module.exports = function(element) {
  return new Promise(function(resolve) {
    var counter = 0

    var elementClick = function() {
      counter++
    }

    var windowClick = function(event) {
      counter--

      if (counter < 0) {
        element.removeEventListener('click', elementClick)
        window.removeEventListener('click', windowClick)

        resolve(event)
      }
    }

    setTimeout(function() {
      element.addEventListener('click', elementClick)
      window.addEventListener('click', windowClick)
    }, 0)
  })
}
