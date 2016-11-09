var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:8000')
  .wait(2000)
  .type('.wc-textbox input', 'markdown')
  .click('.wc-send')
  .wait(5000)
  .evaluate(function () {
    return document.querySelectorAll('h3').length > 5
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  