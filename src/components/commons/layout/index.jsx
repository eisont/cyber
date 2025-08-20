import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import CategoryList from './CategoryList';

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      <Header />
      {currentPage === '/category' && <CategoryList />}
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
