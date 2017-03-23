/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');

var oEvents = {
  HANDLE_HEADER_LOGO_CLICKED: 'handle_header_logo_clicked'
};


var Header = React.createClass({

  handelLogoClick: function () {
    EventBus.dispatch(oEvents.HANDLE_HEADER_LOGO_CLICKED, this);
  },

  render: function () {
    return (
        <div id="head">
          <div id="left">
            <div id="icon" onClick={this.handelLogoClick}>
              <img id="logo1" src="img/Edeka.PNG"/>
            </div>
            <div className="form">
              <input type="text" name="search" placeholder="Search"/>
              <button><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = {
  view: Header,
  events: oEvents
};
