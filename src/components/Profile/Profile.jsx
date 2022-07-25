import React from 'react';
import {
  ProfileStyled,
  Description,
  StatsList,
  UserAvatar,
  Title,
  Text,
  StatsListItem,
  Label,
  Quantuty,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({
  userName,
  avatarSrc,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <ProfileStyled>
        <Description>
          <UserAvatar src={avatarSrc} alt="User Avatar" />
          <Title>{userName}</Title>
          <Text>{'@' + tag}</Text>
          <Text>{location}</Text>
        </Description>

        <StatsList>
          <StatsListItem>
            <Label>Followers</Label>
            <Quantuty>{followers}</Quantuty>
          </StatsListItem>
          <StatsListItem>
            <Label>Views</Label>
            <Quantuty>{views}</Quantuty>
          </StatsListItem>
          <StatsListItem>
            <Label>Likes</Label>
            <Quantuty>{likes}</Quantuty>
          </StatsListItem>
        </StatsList>
      </ProfileStyled>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  avatarSrc: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
