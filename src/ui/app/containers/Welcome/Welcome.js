import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import WelcomeForm from 'components/WelcomeForm/WelcomeForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { CONTAINER_KEY } from '../constants';
import { getLuckyNumber } from '../actions';
import saga from '../saga';
import reducer from '../reducer';

class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;
    const payload = {
      firstName: values.get('firstName'),
      lastName: values.get('lastName'),
      userName: values.get('userName')
    };
    dispatch(getLuckyNumber(payload));
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Welcome</title>
        </Helmet>

        <div className="mt5 pa4 center w-25 bg-light-gray">
          <WelcomeForm onSubmit={this.submit} />
        </div>
      </article>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const withConnect = connect();
const withSaga = injectSaga({ key: CONTAINER_KEY, saga });
const withReducer = injectReducer({ key: CONTAINER_KEY, reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Welcome);
