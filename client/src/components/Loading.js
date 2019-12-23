import React from "react";
import styled from "styled-components";

import Skeleton from "react-loading-skeleton";

const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Img = styled.div`
  border-radius: 5px;
  width: 17rem;
  height: 250px;
  min-height: 18rem;
  display: flex;
  border-radius: 4px;
  margin: 0.5rem 1rem 1rem 1rem;
  transition: box-shadow 0.5s;
  background: ${props => props.theme.black};
`;

const Mission = styled.div`
  border-radius: 5px;
  width: 13rem;
  height: auto;
  min-height: 1rem;
  display: flex;
  border-radius: 4px;
  margin: 0.5rem 1rem 0.5rem 1rem;
  background: ${props => props.theme.black};
`;

const Dates = styled.p`
  border-radius: 5px;
  width: 10rem;
  height: 0.7rem;
  display: flex;
  border-radius: 4px;
  margin: 0.5rem 1rem 0.5rem 1rem;
  background: ${props => props.theme.black};
`;

const Sites = styled.p`
  border-radius: 5px;
  width: 16rem;
  height: 1.2rem;
  display: flex;
  border-radius: 4px;
  margin: 0.5rem 1rem 0.5rem 1rem;
  background: ${props => props.theme.black};
`;

const Status = styled.div`
  text-align: center;
  padding: 4px;
  margin: 12px 5px;
  width: 5.5rem;
  height: 1.5rem;
  border-radius: 3px;
  margin-top: 2.4rem;
  display: flex;
  margin: 2rem 1rem 1.5rem 1rem;
  background: ${props => props.theme.black};
`;

const CardSkeleton = () => {
  return (
    <section>
      <Card>
        {Array(16)
          .fill()
          .map((item, index) => (
            <div key={index}>
              <Img>
                <Skeleton height={250} />
              </Img>
              <Mission>
                <Skeleton height={30} width={`80%`} />
              </Mission>
              <Dates>
                <Skeleton width={`10%`} height={5} />
              </Dates>
              <Sites>
                <Skeleton width={`80%`} height={5} />
              </Sites>
              <Status>
                <Skeleton width={`70%`} height={10} />
              </Status>
            </div>
          ))}
      </Card>
    </section>
  );
};

export default CardSkeleton;
