import { ProductsCategory, ProductsItems } from '../../../../commons/monks/products/Products.monk';
import ProductGridUI from './ProductGridUI';

const ProductGrid = () => {
  return <ProductGridUI ProductsCategoryData={ProductsCategory} ProductsItemsData={ProductsItems} />;
};

export default ProductGrid;
