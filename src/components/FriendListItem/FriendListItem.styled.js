import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  display: flex;
  align-items: center;

  height: 100px;
  width: 300px;

  background-color: gray;
  border-radius: 5px;

  padding-left: 10px;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Indicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};

  margin-right: 10px;
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  background-color: blue;
  border-radius: 5px;

  margin-right: 10px;
`;

export const UserName = styled.span``;
