import Header from './header/Header.container';
import HeroBanner from './herobanner/HeroBanner.container';
import CategoryHighlight from './categoryhighlight/CategoryHighlightUI.container';
import ProductGrid from './productgrid/ProductGrid.container';
import CategoryPromoBanner from './categorypromobanner/CategoryPromoBanner';
import SeasonalSaleBanner from './seasonalsalebanner/SeasonalSaleBanner';
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
