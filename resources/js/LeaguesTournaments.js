var LeaguesTournaments = LeaguesTournaments || {};
LeaguesTournaments = (function () {
  "use strict";
  /* eslint-env browser  */

  var that = {},
    LeaguesTournamentsController,
    LeaguesTournamentsView;

  function init() {

    initLTCont();

    initLTView();

  }

  function initLTCont(){
    LeaguesTournamentsController = new LeaguesTournaments.LeaguesTournamentsController();
    LeaguesTournamentsController.initLeaguesTournamentController();
    LeaguesTournamentsController.addEventListener("onWindowScroll",makeNavbarSticky);
  }

  function initLTView(){
    LeaguesTournamentsView = new LeaguesTournaments.LeaguesTournamentsView();
    LeaguesTournamentsView.initLeaguesTournamentsView();
  }

  function makeNavbarSticky(){
    LeaguesTournamentsView.makeNavbarSticky();
  }

  function start(){
    init();
  }

  that.start = start;
  return that;
}());
