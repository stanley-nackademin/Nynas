'use strict';

function addBackLink() {
  var backLink = document.querySelector('.back-link');
  backLink.addEventListener('click', event => {
    window.history.back();
  });
}

addBackLink();