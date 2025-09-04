import { GetMonkCategoryPromoItems } from '@/shared/monks/categories.monk';
import { FlexBetween, FlexCenter } from '@/shared/assets/styled/CommonStyled';
import CategoryPromoBannerItem from './CategoryPromoBannerItem';
import styled from '@emotion/styled';

const Wrapper = styled(FlexCenter)`
  width: 100%;
  height: 552px;
`;

const MainBox = styled(FlexBetween)`
  width: 1440px;
`;

const CategoryPromoBanner = () => {
  return (
    <Wrapper>
      <MainBox>
        {GetMonkCategoryPromoItems.map((el) => (
          <CategoryPromoBannerItem key={el.id} ItemData={el} />
        ))}
      </MainBox>
    </Wrapper>
  );
};

export default CategoryPromoBanner;
