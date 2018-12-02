import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function AcquaintancesView({acquaintances}) {

  let columns = [];
  if (acquaintances.appLabels != null && acquaintances.appLabels.SOCIAL_ACQUAINTANCES_TABLE != null) {
    columns = acquaintances.appLabels.SOCIAL_ACQUAINTANCES_TABLE;
  }
  return (
    <Table items={acquaintances.items} columns={columns} />
  );
}

AcquaintancesView.propTypes = {
  acquaintances: PropTypes.object
};
