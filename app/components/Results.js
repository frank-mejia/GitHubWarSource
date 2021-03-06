var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function StartOver(props) {
  return (
    <MainContainer>
      <Link to="playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </MainContainer>
  );
}

function Results(props) {
  if (props.isLoading) {
    return (
      <Loading text="One Moment" speed={300} />
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>

        <StartOver />
      </MainContainer>
    );
  }

  var winningIndex = (props.scores[0] > props.scores[1]) ? 0 : 1;
  var losingIndex = (winningIndex === 1) ? 0 : 1;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>

      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>

      <StartOver />

    </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;
