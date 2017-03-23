/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');

var oEvents = {
  HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};

var AllContents = React.createClass({
  handelPostClick: function () {
    var oImageData = this.props.data;
      EventBus.dispatch(oEvents.HANDLE_ALL_CONTENT_POST_CLICKED, this, oImageData.postId);
  },
  render: function () {
    var oImageData = this.props.data;
    return (
          <div className="centerCollCls" onClick={this.handelPostClick} >
            <div className="contentImg">
              <img src={oImageData.imgUrl}/>
            </div>
            <div className="content">
              <div className="title" >
                <span>{oImageData.title}</span>
              </div>
              <br/>
              <div className="description">
							<span> {oImageData.description}</span>
              </div>
            </div>
          </div>
    );
  }
});
module.exports = {
  view: AllContents,
  events: oEvents
};