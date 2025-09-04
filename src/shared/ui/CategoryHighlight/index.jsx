import { useDispatch } from 'react-redux';
import { BaseballOutlineSVG, CarSportsOulineSVG, FastFoodOutlineSVG, LaptopSVG, ManOutlineSVG, WomanOutlineSVG } from '@/shared/assets/SVGicons/48pxIcon';
import { productIdSlice } from '@/redux/redux';
import * as S from './CategoryHighlight.styled';

const CategoryHighlight = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Category</S.Top>
          <S.Categories>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('vehicle'))}>
              <S.CategoryImg>{CarSportsOulineSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Vehicle</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('sports-accessories'))}>
              <S.CategoryImg>{BaseballOutlineSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Sports Accessories</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}>
              <S.CategoryImg>{LaptopSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Laptops</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('groceries'))}>
              <S.CategoryImg>{FastFoodOutlineSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Groceries</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('mens-shirts'))}>
              <S.CategoryImg>{ManOutlineSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Mens Shirts</S.Title>
            </S.ItemBox>
            <S.ItemBox to='/category' onClick={() => dispatch(productIdSlice.actions.getProductId('womens-dresses'))}>
              <S.CategoryImg>{WomanOutlineSVG({ stroke: '#000' })}</S.CategoryImg>
              <S.Title>Womens Dresses</S.Title>
            </S.ItemBox>
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlight;
