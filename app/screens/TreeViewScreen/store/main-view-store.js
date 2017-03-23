var _ = require('lodash');

var MicroEvent = require('../../../libraries/microevent/MicroEvent.js');
var MainViewProps = require('./model/main-view-props');
var AppData = require('./model/main-view-app-data');


var TreeViewStore = (function () {

  var oComponentProps = MainViewProps;

  var triggerChange = function () {
    TreeViewStore.trigger('change');
  };

  var _getViewData = function () {
    /*return oComponentProps.getData();*/
  };



  var _handleAllContentPostClicked = function(iPostId) {
     oComponentProps.setViewId(iPostId)
    oComponentProps.setFlag(true);
    triggerChange();
  };

  var _handleHeaderLogoClicked = function () {
    oComponentProps.setFlag(false);
    triggerChange();
  }
  return {

    getData: function () {
      var data = {
        appData: AppData,
        componentProps: oComponentProps
      };

      return data;
    },

    fetchGlobalData: function (aPostData) {
      oComponentProps.setPostData(aPostData);
      console.log(aPostData);
    },

    getViewData: function () {
      return _getViewData();
    },

    handleAllContentPostClicked: function (iPostId) {
      _handleAllContentPostClicked(iPostId);
    },

    handleHeaderLogoClicked: function () {
      _handleHeaderLogoClicked();
    }
  }
})();

MicroEvent.mixin(TreeViewStore);

module.exports = TreeViewStore;