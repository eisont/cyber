import { useDispatch } from 'react-redux';
import * as S from './Iphone13Pro.styled';
import { productIdSlice } from '../../../../../redux/redux';

const Iphone13Pro = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Iphone14ProTextBox>
        <S.HeadText>Pro.Beyond.</S.HeadText>
        <S.TitleText>
          <span style={{ fontWeight: '100' }}>IPhone 13</span> Pro
        </S.TitleText>
        <S.SubText>Created to change everything for the better. For everyone</S.SubText>
        <S.Linkst to='category' onClick={() => dispatch(productIdSlice.actions.getProductId('smartphones'))}>
          <S.Botton>Shop Now</S.Botton>
        </S.Linkst>
      </S.Iphone14ProTextBox>
      <S.Iphone14ProImg src='../../../../../public/HeroBanner/Iphone14pro.png' />
    </S.Wrapper>
  );
};

export default Iphone13Pro;
