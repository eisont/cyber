import { useDispatch } from 'react-redux';
import { BaseballOutlineSVG, CarSportsOulineSVG, FastFoodOutlineSVG, LaptopSVG, ManOutlineSVG, WomanOutlineSVG } from '@/shared/assets/SVGicons';
import { productIdSlice } from '@/redux';
import * as S from '@/pages/ui/CategoryHighlight/CategoryHighlight.styled';

const CategoryHighlight = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Category</S.Top>
          <S.Categories>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('vehicle'))}>
              <S.CategoryImg>{CarSportsOulineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Vehicle</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('sports-accessories'))}>
              <S.CategoryImg>{BaseballOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Sports Accessories</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}>
              <S.CategoryImg>{LaptopSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Laptops</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('groceries'))}>
              <S.CategoryImg>{FastFoodOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Groceries</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('mens-shirts'))}>
              <S.CategoryImg>{ManOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Mens Shirts</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('womens-dresses'))}>
              <S.CategoryImg>{WomanOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Womens Dresses</S.Title>
            </S.ItemBox>
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlight;
