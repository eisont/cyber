import * as S from './ProductCard.styled';

const ProductCard = (pr) => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.IconBox>{pr.item.like ? <S.LikeIcon src={'../../../../../public/icon/Like.png'} /> : <S.LikeIcon src={'../../../../../public/icon/FeelLike.png'} />}</S.IconBox>

        <S.ItemImg src={`../../../../../public/products/${pr.item.img}`} />
        <S.ItemContents>{pr.item.contents}</S.ItemContents>
        <S.ItemPrice>{pr.item.price}</S.ItemPrice>
        <S.BuyBt>{pr.item.button}</S.BuyBt>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductCard;
