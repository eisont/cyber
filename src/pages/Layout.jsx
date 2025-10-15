import { BREAKPOINTS } from '@/shared/assets/styled/breakpoints';
import { Header, Footer } from '@/shared/layout';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
