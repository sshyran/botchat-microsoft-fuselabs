var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:8000')
  .wait(2000)
  .type('.wc-textbox input', 'hi')
  .click('.wc-send')
  .wait(3000)
  .evaluate(function () {
    return document.querySelectorAll('span.format-markdown')[2].innerText.indexOf('hi') != -1
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  