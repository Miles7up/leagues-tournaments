/* eslint-env browser */
/* global LeaguesTournaments */
/* global EventPublisher */

LeaguesTournaments.LeaguesTournamentsView = function () {
  "use strict";
  var that = new EventPublisher(),
    navbar = document.getElementById("navbar"),
    topPosNavbar = navbar.offsetTop;

  function initLeaguesTournamentsView() {

  }

  function makeNavbarSticky(){    
    if (window.pageYOffset >= topPosNavbar) {
      navbar.classList.add("sticky");
    } else if(window.pageYOffset < topPosNavbar){
      navbar.classList.remove("sticky");
    }
  }

  that.makeNavbarSticky = makeNavbarSticky;
  that.initLeaguesTournamentsView = initLeaguesTournamentsView;
  return that;
};
