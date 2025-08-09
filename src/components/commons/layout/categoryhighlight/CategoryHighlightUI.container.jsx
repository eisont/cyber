import { CategoryCards } from '../../../../commons/monks/categories/CategoryCards.monk';
import CategoryHighlightUI from './CategoryHighlightUI.presenter';

const CategoryHighlight = () => {
  return <CategoryHighlightUI CategoryCard={CategoryCards} />;
};

export default CategoryHighlight;
