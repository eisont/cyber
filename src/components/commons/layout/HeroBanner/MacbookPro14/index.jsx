import { useDispatch } from 'react-redux';
import { productIdSlice } from '../../../../../redux/redux';
import * as S from './MacbookPro14.styled';

const MacbookPro14 = () => {
  const dispatch = useDispatch();
  return (
    <S.Wrapper>
      <S.Macbookpro14TextBox>
        <S.TitleText>
          Macbook<span style={{ fontWeight: '600' }}> Pro</span> 14
        </S.TitleText>
        <S.SubText>The new 14‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</S.SubText>
        <S.Linkst to='category' onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}>
          <S.Botton>Shop Now</S.Botton>
        </S.Linkst>
      </S.Macbookpro14TextBox>
      <S.Macbookpro14Img src='../../../../../public/img/HeroBanner/MacBookPro14.png' alt='MacBookPro14' />
    </S.Wrapper>
  );
};

export default MacbookPro14;
