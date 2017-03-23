var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');

var oEvents = {
  HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};

var AllMaximizeContainer = React.createClass({
  handelPostClick: function (iPostId) {
    console.log("jshkdhajskda::::: ");
    console.log(iPostId);
    EventBus.dispatch(oEvents.HANDLE_ALL_CONTENT_POST_CLICKED, this, iPostId);
  },

  getAllContentsView: function () {
    var aPosts = this.props.data;
    var iViewId = this.props.viewId;
      var aPostsView = [];
      for (var iIndex = 0; iIndex < aPosts.length; iIndex++) {
        var oPost = aPosts[iIndex];
        if(oPost.postId !=iViewId) {
          aPostsView.push(
              <div className="suggestedContent" onClick={this.handelPostClick.bind(this, oPost.postId)}>
                <div className="contentImg">
                  <img src={oPost.imgUrl}/>

                </div>
                <div className="content">
                  <div className="title">
                    <span>{oPost.title}</span>
                  </div>
                  <br/>
                  <div className="description">
                    <span> {oPost.description}</span>
                  </div>
                </div>
              </div>
          )
        }
    }
    return aPostsView;
  },

  getViewData: function () {
    var aPosts = this.props.data;
    var iViewId = this.props.viewId;
    var oPostData;
    for (var iIndex = 0; iIndex < aPosts.length; iIndex++) {
      var oPost = aPosts[iIndex];
      if(oPost.postId == iViewId){
        oPostData = oPost;
      }
    }
    return oPostData;
  },

  render: function () {
    var oViewData = this.getViewData();
    return (
        <div className="allMaxmizeContent">
          <div className="maximizeContainer">
            <div className="maximizeImg">
              <img src={oViewData.imgUrl} height="450" width="900"/>
            </div>

            <div className="title">
              <span>{oViewData.title}</span>
            </div>
            <div className="description">
              <span> {oViewData.description}</span>
            </div>
          </div>

          <div className="suggestions">
            {this.getAllContentsView()}
          </div>
        </div>
    );
  }
});
module.exports = AllMaximizeContainer;