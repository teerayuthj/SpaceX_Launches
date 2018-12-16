import styled from "styled-components";

export const ItemCard = styled.div`
  width: 17rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.white};
  border-radius: 4px;
  margin: 1.5rem 2rem;
  transition: box-shadow 0.5s;
  background: ${props => props.theme.black};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12),
    0 2px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -webkit-box-orient: vertical;

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

export const LuanchSuccess = styled.button`
  border-style: none;
  font-size: 18px;
  font-weight: 600;
  padding: 2px;
  margin: 10px;
  width: 5rem;
  height: 5rem;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  outline: none;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.red};
`;
