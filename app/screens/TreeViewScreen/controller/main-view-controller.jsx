const React = require('react');

const Header = require('../view/Header').view;
const Container = require('../view/Container');

const oPropTypes = {
  store: React.PropTypes.object.isRequired,
  action: React.PropTypes.object.isRequired
};

class MainViewController extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        appData: this.getStore().getData().appData,
        componentProps: this.getStore().getData().componentProps,
    };
    this.getStore = this.getStore.bind(this);
    this.handleTreeViewStateChanged = this.handleTreeViewStateChanged.bind(this);
  }

  /*getInitialState () {

    var initialState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps,
    };
    return initialState;
  };*/

  //@Bind: Store with state
  componentDidMount () {
    this.getStore().bind('change', this.handleTreeViewStateChanged);
    this.props.action.registerEvent();
  };

  componentDidUpdate () {
  };

  componentWillMount () {
    let aMockDataForPost = this.state.appData.getMockDataForPosts();
    this.getStore().fetchGlobalData(aMockDataForPost);
  };

  //@UnBind: store with state
  componentWillUnmount () {
    this.getStore().unbind('change', this.handleTreeViewStateChanged);
    this.props.action.deRegisterEvent();
  };

  //@set: state
  handleTreeViewStateChanged () {
    let changedState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    this.setState(changedState);
  };

  getStore () {
    return this.props.store;
  };

  render () {
    let oComponentProps = this.state.componentProps;
    let bViewFlag = oComponentProps.getFlag();
    let iViewId = oComponentProps.getViewId();
    let aPostData = oComponentProps.getPostData();

    return (
        <div>
          <Header />
          <Container posts={aPostData} viewId={iViewId} viewFlag={bViewFlag}/>
        </div>
    );
  };
}

MainViewController.propTypes = oPropTypes;
module.exports = MainViewController;