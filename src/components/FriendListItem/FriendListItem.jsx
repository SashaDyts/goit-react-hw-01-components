import React from 'react';
import {
  FriendListItemStyled,
  Indicator,
  UserAvatar,
  UserName,
} from './FriendListItem.styled.js';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return (
    <FriendListItemStyled>
      <Indicator isOnline={friends.isOnline}></Indicator>
      <UserAvatar src={friends.avatar} alt="User avatar" />
      <UserName>{friends.name}</UserName>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default FriendListItem;
