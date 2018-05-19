import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function AcquaintancesView({currentState, fields, texts, labels}) {


    return (
      <div>
        <div> Acquaintances Page </div>
      </div>
    );
}


AcquaintancesView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object
};
