var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({username: ''});
  },

  handleUpdateUser: function(event) {
    event.preventDefault;

    this.setState({username: event.target.value});
  },

  handleSubmitUser: function(event) {
    event.preventDefault();

    var username = this.state.username;

    this.setState({username: ''});

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      });
    } else {
      this.context.router.push({
        pathname: '/playerTwo/' + username
      });
    }
  },

  render: function() {
    return (
      <Prompt
        header={this.props.route.header}
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
      />
    );
  }
});

module.exports = PromptContainer;
