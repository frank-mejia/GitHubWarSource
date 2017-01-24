var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  componentDidMount: function() {
    var query = this.props.location.query;
    var that = this;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(playersInfo) {
      that.setState({
        isLoading: false,
        playersInfo: [playersInfo[0], playersInfo[1]]
      });
    });
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      isLoading: true,
      playersInfo: []
    });
  },

  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: "/results",
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },

  render: function() {
    return (
      <div>
        <ConfirmBattle
        onInitiateBattle={this.handleInitiateBattle}
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
      </div>
    );
  }
});

module.exports = ConfirmBattleContainer;
