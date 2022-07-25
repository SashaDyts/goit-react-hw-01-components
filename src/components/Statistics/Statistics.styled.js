import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  margin-bottom: 50px;
`;

export const StatiscticList = styled.ul`
  display: flex;

  width: 100%;
`;

export const StatiscticListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: blue;

  width: 33.3%;

  :not(:last-child) {
    margin-right: 5px;
  }

  border-radius: 10px;
`;

export const Label = styled.span``;

export const Persenrage = styled.span``;
