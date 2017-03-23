var eventBus = require('../../../libraries/eventdispatcher/EventDispatcher.js');
var AllContentEvent = require('../view/AllContents').events;
var HeaderEvent = require('../view/Header').events;

var MainViewStore = require('../store/main-view-store');


var TreeViewAction = (function () {


  var handleAllContentPostClicked = function (oContext, iPostId) {
    MainViewStore.handleAllContentPostClicked(iPostId);
  };
  var handleHeaderLogoClicked = function () {
    MainViewStore.handleHeaderLogoClicked();
  };

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(AllContentEvent.HANDLE_ALL_CONTENT_POST_CLICKED, handleAllContentPostClicked);
      eventBus.addEventListener(HeaderEvent.HANDLE_HEADER_LOGO_CLICKED, handleHeaderLogoClicked);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(AllContentEvent.HANDLE_ALL_CONTENT_POST_CLICKED, handleAllContentPostClicked);
      eventBus.removeEventListener(HeaderEvent.HANDLE_HEADER_LOGO_CLICKED, handleHeaderLogoClicked);
    }
  }
})();

module.exports = TreeViewAction;