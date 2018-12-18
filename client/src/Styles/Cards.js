import styled from "styled-components";

export const ItemCard = styled.div`
  width: 17rem;
  height: auto;
  min-height: 30.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 1.5rem 2rem;
  color: ${props => props.theme.white};
  transition: box-shadow 0.5s;
  background: ${props => props.theme.black};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12),
    0 2px 1px -2px rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 6px 12px 1px rgba(0, 0, 0, 0.25);
    background-color: #1a1d20;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  text-align: center;
  width: 100%;
`;

export const Mission = styled.div`
  padding: 10px;
  font-size: 24px;
  font-weight: 600;
`;

export const Dates = styled.div`
  font-size: 11px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const LuanchSite = styled.div`
  padding: 10px;
  font-size: 14px;
`;

export const LuanchSuccess = styled.div`
  font-size: 21px;
  font-weight: 500;
  text-align: center;
  padding: 4px;
  margin: 12px 5px;
  width: 5.5rem;
  height: 1.6rem;
  border-radius: 3px;
  margin-top: 2.4rem;
  color: ${props => props.theme.white};
`;

export const Null = styled.div`
  background-color: ${props => props.theme.purple};
  border-radius: 3px;
  width: 5.5rem;
  height: 1.6rem;
  padding: 3px;
`;

export const Success = styled.div`
  background-color: ${props => props.theme.green};
  border-radius: 3px;
  padding: 3px;
  width: 5.5rem;
  height: 1.6rem;
`;

export const Fail = styled.div`
  background-color: ${props => props.theme.red};
  border-radius: 3px;
  width: 5.5rem;
  height: 1.6rem;
  padding: 3px;
`;
