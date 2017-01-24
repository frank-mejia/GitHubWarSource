var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  componentDidMount: function() {
    var playersInfo = this.props.location.state.playersInfo;
    var that = this;

    githubHelpers.battle(playersInfo)
      .then(function(scores) {
        that.setState({
          scores: scores,
          isLoading: false
        });
      });
  },

  getInitialState: function() {
    return ({
      scores: [],
      isLoading: true,
    });
  },

  render: function() {
    return (
      <Results isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    );
  }
});

module.exports = ResultsContainer;
