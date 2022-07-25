const { default: styled } = require('styled-components');

export const ProfileStyled = styled.div`
  max-width: 500px;
  background-color: #dcdcdc;
  border-radius: 5px;

  padding-top: 30px;

  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 150px;
  background-color: white;

  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;

  color: #696969;
`;

export const Text = styled.p`
  color: #a9a9a9;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  margin-top: 30px;
  background-color: #778899;

  border-radius: 5px;

  padding: 15px;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3%;
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Quantuty = styled.span`
  color: #696969;
`;
