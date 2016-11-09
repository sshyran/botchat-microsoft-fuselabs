var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:8000')
  .wait(2000)
  .type('.wc-textbox input', 'carousel')
  .click('.wc-send')
  .wait(3000)
  .evaluate(function () {
    return document.querySelectorAll('.scroll.next').length > 0
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  