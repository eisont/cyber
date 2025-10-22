import styled from '@emotion/styled';
import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';

export const DumBox = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.5em;

  background: rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;
`;

export const DumImg = styled.div`
  width: ${(pr) => pr.width};
  height: ${(pr) => pr.height};
  background: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 104px;
    height: 104px;
  }
`;
export const DumText = styled.div`
  width: ${(pr) => pr.width};
  height: ${(pr) => pr.height};
  background: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 104px;
    height: 10px;
  }
`;
