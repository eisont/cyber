import { FlexColBetween } from '../../../shared/assets/styled/CommonStyled';
import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Category from './Category';

const Wrapper = styled(FlexColBetween)`
  align-items: stretch;
  width: 100vw;
`;

const Layout = (pr) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeroBanner />
              <CategoryHighlight />
              <ProductGrid ProductListData={pr.ProductListData} />
              <CategoryPromoBanner />
              <SeasonalSaleBanner />
            </>
          }
        />
        <Route path='/category' element={<Category ProductListData={pr.ProductListData} />} />
        <Route path='/category/:id' element={<Category ProductListData={pr.ProductListData} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
