import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin: 0 auto;
  padding: 8px;

  max-width: 100%;
  width: 360px;

  border-radius: 8px;
    box-shadow: rgb(255, 255, 255) -3px -3px 7px, rgb(206, 206, 209) 3px 3px 5px;
    background-color: rgb(230, 230, 242);
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.5rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;


export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  box-shadow: rgb(255, 255, 255) -3px -3px 7px, rgb(206, 206, 209) 3px 3px 5px;
  }
`;

export const Name = styled.p`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
`;