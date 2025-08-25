import { FavoritesSVG } from '../../../../shared/assets/SVGicons/32pxIcon';
import * as S from './ProductItem.styled';

const ProductItem = (pr) => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.IconBox>{/* <S.LikeIcon>{FavoritesSVG('#919191')}</S.LikeIcon> */}</S.IconBox>
        <S.Linkst to={`/category/${pr.product.id}`}>
          <S.ImgBox src={pr.product.thumbnail} />
        </S.Linkst>

        <S.Title>{pr.product.title}</S.Title>
        <S.Price>$ {pr.product.price}</S.Price>
        <S.Button>Buy Now</S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItem;
