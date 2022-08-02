import React from 'react';
import {
  FriendListItemStyled,
  Indicator,
  UserAvatar,
  UserName,
} from './FriendListItem.styled.js';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled>
      <Indicator isOnline={isOnline}></Indicator>
      <UserAvatar src={avatar} alt={`${name} avatar`} />
      <UserName>{name}</UserName>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
