import Header from './Header';
import HeroBanner from './HeroBanner';
import CategoryHighlight from './CategoryHighlight';
import ProductGrid from './ProductGrid';
import CategoryPromoBanner from './CategoryPromoBanner';
import SeasonalSaleBanner from './SeasonalSaleBanner';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <CategoryHighlight />
      <ProductGrid />
      <CategoryPromoBanner />
      <SeasonalSaleBanner />
      <Footer />
    </>
  );
};

export default Layout;
