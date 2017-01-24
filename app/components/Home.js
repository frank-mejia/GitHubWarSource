var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');


var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>GitHub War</h1>

        <p className="lead">Let the battle begin!</p>

        <Link to="/playerOne">
          <button className="btn btn-lg btn-success" type="button">Get Started</button>
        </Link>

      </MainContainer>
    );
  }
});

module.exports = Home;
