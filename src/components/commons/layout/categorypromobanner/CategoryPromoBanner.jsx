import { CategoryPromoBannerItems } from '../../../../commons/monks/categories/CategoryPromoBannerItems.monk';
import CategoryPromoBannerItem from '../../components/categorypromobanneritem/CategoryPromoBannerItem';
import * as S from './CategoryPromoBanner.styled';

const CategoryPromoBanner = () => {
  return (
    <S.Wrapper>
      <S.MainBox>
        {CategoryPromoBannerItems.map((el) => (
          <CategoryPromoBannerItem key={el.id} CategoryPromoBannerItem={el} />
        ))}
      </S.MainBox>
    </S.Wrapper>
  );
};

export default CategoryPromoBanner;
