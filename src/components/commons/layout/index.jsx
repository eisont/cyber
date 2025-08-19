import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import Catalog from './Catalog';

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      <Header />
      <Catalog />
      {currentPage === '/' && <HeroBanner />}
      {currentPage === '/' && <CategoryHighlight />}
      {currentPage === '/' && <ProductGrid />}
      {currentPage === '/' && <CategoryPromoBanner />}
      {currentPage === '/' && <SeasonalSaleBanner />}
      <Footer />
    </>
  );
};

export default Layout;
