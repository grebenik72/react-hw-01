import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 32px;
  margin-bottom: 16px;
  padding: 8px;
  width: 360px;
  border-radius: 8px;
    box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(180, 190, 200) 1px 1px 1px;
    background-color: rgb(230, 230, 242);
`;

export const Thead = styled.thead`
  border-radius: 8px;
  background-color: blue;
  color: white;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(110, 110, 150);
           color: #ffffff;
  
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: 8px;
  text-align: center;
`;

export const Tb = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  padding: 4px;
  text-align: center;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;