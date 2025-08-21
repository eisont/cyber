import * as S from './ProductItem.styled';

const ProductItem = (pr) => {
  console.log('product', pr.product);

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.IconBox>
          <S.LikeIcon src='../../../../../public/icon/Like.png' />
        </S.IconBox>
        <S.ImgBox src={pr.product.thumbnail} />

        <S.Title>{pr.product.title}</S.Title>
        <S.Price>$ {pr.product.price}</S.Price>
        <S.Button>Buy Now</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItem;
