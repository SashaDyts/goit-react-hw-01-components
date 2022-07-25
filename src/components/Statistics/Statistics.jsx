import React from 'react';
import {
  StatisticsStyled,
  StatiscticList,
  StatiscticListItem,
  Label,
  Persenrage,
} from './Statistics.styled.js';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyled>
      {title && <h2>{title}</h2>}
      <StatiscticList>
        {stats.map(({ id, label, percentage }) => (
          <StatiscticListItem key={id}>
            <Label>{label}</Label>
            <Persenrage>{percentage + '%'}</Persenrage>
          </StatiscticListItem>
        ))}
      </StatiscticList>
    </StatisticsStyled>
  );
};

export default Statistics;
