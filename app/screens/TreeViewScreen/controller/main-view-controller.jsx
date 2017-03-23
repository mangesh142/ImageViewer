var React = require('react');

var Header = require('../view/Header').view;
var Container = require('../view/Container');

var MainViewController = React.createClass({

  propTypes: {
    store: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired
  },

  getInitialState: function () {

    var initialState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps,
    };

    return initialState;

  },

  //@Bind: Store with state
  componentDidMount: function () {
    this.getStore().bind('change', this.handleTreeViewStateChanged);
    this.props.action.registerEvent();
  },

  componentDidUpdate: function () {
  },

  componentWillMount: function () {
    var aMockDataForPost = this.state.appData.getMockDataForPosts();
    this.getStore().fetchGlobalData(aMockDataForPost);
  },

  //@UnBind: store with state
  componentWillUnmount: function () {
    this.getStore().unbind('change', this.handleTreeViewStateChanged);
    this.props.action.deRegisterEvent();
  },

  //@set: state
  handleTreeViewStateChanged: function () {

    var changedState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    this.setState(changedState);
  },

  getStore: function () {
    return this.props.store;
  },

  render: function () {

    var oComponentProps = this.state.componentProps;
    var bViewFlag = oComponentProps.getFlag();
    var iViewId = oComponentProps.getViewId();
    var aPostData = oComponentProps.getPostData();

    return (
        <div>
          <Header />
          <Container posts={aPostData} viewId = {iViewId} viewFlag = {bViewFlag}/>
        </div>
    );
  }
});

module.exports = MainViewController;