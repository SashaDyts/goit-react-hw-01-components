import React from 'react';
import { FriendListStyled } from './FriendList.styled.js';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      <FriendListItem friends={friends} />
    </FriendListStyled>
  );
};

export default FriendList;
