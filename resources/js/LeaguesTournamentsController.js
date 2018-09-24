/* eslint-env browser */
/* global LeaguesTournaments */
/* global EventPublisher */

LeaguesTournaments.LeaguesTournamentsController = function () {
  "use strict";
  var that = new EventPublisher();

  function initLeaguesTournamentController() {
    //init eventlisteners like :loginbtn.addEventListener("click", onButtonClick);
    window.addEventListener("scroll", onWindowScroll);
  }

  function onWindowScroll(){
    
    that.notifyAll("onWindowScroll");

  }

  that.initLeaguesTournamentController = initLeaguesTournamentController;
  return that;
};
