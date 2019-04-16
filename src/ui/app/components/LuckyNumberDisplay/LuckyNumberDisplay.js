import React from 'react';
import PropTypes from 'prop-types'; 

class LuckyNumberDisplay extends React.PureComponent {
  render() {

    const {firstName, lastName, luckyNumber} = this.props

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        <h3>{firstName} {lastName} your lucky number is {luckyNumber}!</h3>
      </div>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  luckyNumber: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};


export default LuckyNumberDisplay;