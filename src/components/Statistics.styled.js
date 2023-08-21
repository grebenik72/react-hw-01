import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';

export const Section = styled.section`
    padding: 36px;
    display: flex;
    flex-direction: column;
    margin: 0px auto 32px;
    max-width: 100%;
    width: 360px;
    box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(180, 190, 200) 1px 1px 1px;
    border-radius: 8px;
    background-color: rgb(230, 230, 242);
`;

export const Title = styled.h2`
    padding: 16px;
    border: 1px solid rgb(211, 213, 227);
    text-shadow: rgb(255, 255, 255) 1px 1px 1px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    color: grey;
    background-color: white;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 100%;
  height: 100%;
  background-color: ${props => getRandomHexColor(props.index)}
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const Percentage = styled.span`
  font-weight: 700;
  color: #fff;
`;