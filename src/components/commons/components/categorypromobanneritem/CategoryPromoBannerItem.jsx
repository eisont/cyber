import * as S from './CategoryPromoBannerItem.styled';

const CategoryPromoBannerItem = (pr) => {
  return (
    <S.Wrapper background={pr.CategoryPromoBannerItem.background}>
      <S.MainBox>
        <S.ItemImg src={`../../../../../public/CategoryPromoBanner/${pr.CategoryPromoBannerItem.img}`} />
        <S.ItemText color={pr.CategoryPromoBannerItem.color}>{pr.CategoryPromoBannerItem.text}</S.ItemText>
        <S.ItemBt color={pr.CategoryPromoBannerItem.color} background={pr.CategoryPromoBannerItem.background} hover={pr.CategoryPromoBannerItem.hover}>
          {pr.CategoryPromoBannerItem.button}
        </S.ItemBt>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default CategoryPromoBannerItem;
