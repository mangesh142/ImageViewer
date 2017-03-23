/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var AllContents = require('./AllContents').view;
var AllMaximizeContainer = require('./AllMaximizeContainer');

var Centercoll = React.createClass({

  getAllContentsView: function () {
    var bViewFlag = this.props.viewFlag;
    if (!bViewFlag) {
      var aPosts = this.props.posts;
      var aPostsView = [];
      for (var iIndex = 0; iIndex < aPosts.length; iIndex++) {
        var oPost = aPosts[iIndex];
        aPostsView.push(<AllContents data={oPost}/>)
      }
      return aPostsView;
    }
    else{
      return <AllMaximizeContainer data={this.props.posts} viewId={this.props.viewId}/>;
    }

  },

  render: function () {
    return (
        <div id="center-coll">
          <div className="allContents">
            {this.getAllContentsView()}
          </div>
        </div>
    );
  }
});
module.exports = Centercoll;