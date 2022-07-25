import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 700px;
  text-align: center;
`;

export const TransactionHistoryTableHead = styled.thead`
  height: 40px;

  color: white;
  background-color: blueviolet;
`;

export const TransactionHistoryTableBody = styled.tbody``;

export const TransactionHistoryTableTr = styled.tr`
  :nth-child(even) {
    background-color: gray;
  }
  height: 40px;
`;
