import React from 'react';
import { FriendListStyled } from './FriendList.styled.js';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => {
        return <FriendListItem friends={friend} key={friend.id} />;
      })}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
  key: PropTypes.number,
};

export default FriendList;
