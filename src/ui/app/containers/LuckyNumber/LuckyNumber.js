import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CONTAINER_KEY } from '../constants';

import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  render() {
    if (!this.props.luckyNumberData || this.props.luckyNumberData.get('luckyNumber') === -1) {
      // If redux is uninitialized or is using initialState
      return (
        <div className="mt5 pa4 center w-25 bg-light-gray">
          <h3>You haven't filled the form out yet.</h3>
          <Link to="/">Go to form</Link>
        </div>
      );
    }

    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay
          firstName={this.props.luckyNumberData.get('firstName')} // Transform the data beforehand to keep the component simple
          lastName={this.props.luckyNumberData.get('lastName')}
          luckyNumber={this.props.luckyNumberData.get('luckyNumber')}
        />
      </article>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  luckyNumberData: PropTypes.any
};

const mapStateToProps = (state) => ({
  luckyNumberData: state.get(CONTAINER_KEY)
});

export default connect(
  mapStateToProps,
  null
)(LuckyNumber);
