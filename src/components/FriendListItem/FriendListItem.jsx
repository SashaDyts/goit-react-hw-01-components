import React from 'react';
import {
  FriendListItemStyled,
  Indicator,
  UserAvatar,
  UserName,
} from './FriendListItem.styled.js';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, id, isOnline }) => {
    return (
      <FriendListItemStyled key={id}>
        <Indicator isOnline={isOnline}></Indicator>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{name}</UserName>
      </FriendListItemStyled>
    );
  });
};

export default FriendListItem;
