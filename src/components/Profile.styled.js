import styled from "styled-components";

export const Wraper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto 32px;
    padding: 36px;
    max-width: 100%;
    width: 360px;
    border-radius: 8px;
    box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
    background-color: rgb(230, 230, 242);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 300px;
    gap: 8px;
    padding: 16px;
    background:white;
`;
export const Avatar = styled.img`
display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: rgb(255, 255, 255) -3px -3px 7px, rgb(206, 206, 209) 3px 3px 5px;
`;
export const Name = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const Tag = styled.p`
    color: grey;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Label = styled.li`
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 64px;
     background-color: rgb(240, 240, 244);
    border: solid 1px rgb(206, 206, 209);
`;

export const Quantity = styled.p`
    font-weight: 700;
`;