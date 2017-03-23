/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Leftcoll = require('./Leftcoll');
var Centercoll = require('./Centercoll');

var Container = React.createClass({

    render: function () {
        return (
            <div id="container">
                <Leftcoll/>
                <Centercoll posts={this.props.posts} viewId = {this.props.viewId} viewFlag = {this.props.viewFlag}/>
            </div>
        );
    }
});

module.exports = Container;