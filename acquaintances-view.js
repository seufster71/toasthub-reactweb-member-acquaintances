import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function AcquaintancesView({acquaintances}) {

  let columns = [];
  if (acquaintances.prefLabels != null && acquaintances.prefLabels.SOCIAL_ACQUAINTANCES_TABLE != null) {
    columns = acquaintances.prefLabels.SOCIAL_ACQUAINTANCES_TABLE;
  }
  return (
    <Table items={acquaintances.items} columns={columns} />
  );
}

AcquaintancesView.propTypes = {
  acquaintances: PropTypes.object
};
