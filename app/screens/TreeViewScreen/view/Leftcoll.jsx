/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Leftcoll = React.createClass({

    render: function () {
        return (
            <div id="leftcol">
              <div className="leftContainer">
                <div className="filds">
                  <a href="#">
                    <img src="img/home-xxl.png"/>
                    <span>Home</span>
                  </a>
                </div>
                <br/>
                <div className="filds">
                  <a href="#">
                    <img src="img/account.png"/>
                    <span>Account</span>
                  </a>
                </div>
                <br/>
                <div className="filds">
                  <a href="#">
                    <img src="img/settings.png"/>
                    <span>Settings</span>
                  </a>
                </div>
                <br/>

              </div>
            </div>
        );
    }
});

module.exports = Leftcoll;