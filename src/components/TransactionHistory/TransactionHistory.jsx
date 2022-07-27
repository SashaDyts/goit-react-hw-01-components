import React from 'react';
import {
  TransactionHistoryTable,
  TransactionHistoryTableHead,
  TransactionHistoryTableTr,
  TransactionHistoryTableBody,
} from './TransactionHistory.styled.js';

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryTableHead>

      <TransactionHistoryTableBody>
        {items.map(({ amount, type, id, currency }) => {
          return (
            <TransactionHistoryTableTr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionHistoryTableTr>
          );
        })}
      </TransactionHistoryTableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  key: PropTypes.number,
  amount: PropTypes.number,
  type: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
