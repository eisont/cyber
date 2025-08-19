import * as S from './Product.styled';

const Product = () => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.IconBox>
          <S.LikeIcon src='../../../../../public/icon/Like.png' />
        </S.IconBox>
        <S.ImgBox />

        <S.Title>title</S.Title>
        <S.Price>$ price</S.Price>
        <S.Button>Buy Now</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Product;
