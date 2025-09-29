import { OriginalPrice } from '@/shared/lib';
import * as S from './ProductItemDetail.styled';

const ProductItemDetail = (pr) => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>{pr.ItemData.title}</S.Title>
        <S.TagsBox>
          {pr.ItemData.tags?.map((el) => (
            <S.Tags key={el}>#{el}</S.Tags>
          ))}
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text> {pr.ItemData.brand || '없음'}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text> {pr.ItemData.category}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text> {pr.ItemData.sku}
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ImgBox>
            <S.ProductImg src={pr.ItemData.thumbnail} alt='thumbnail' />
            <S.SubBox>{pr.ItemData.images?.filter((el, i) => i > 0 && <S.SubImg src={el} key={i} />)}</S.SubBox>
          </S.ImgBox>

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>${OriginalPrice(pr.ItemData)}</S.OriginalPrice>
                <S.DiscountPercentage>-{pr.ItemData.discountPercentage}%</S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>${pr.ItemData.price}</S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text> {pr.ItemData.stock}
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text> {pr.ItemData.availabilityStatus}
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text>⭐️ {pr.ItemData.rating}
              </S.Tt>

              <S.Description>{pr.ItemData.description}</S.Description>
              <S.Tt>
                크기: W: {pr.ItemData.dimensions?.width} x H: {pr.ItemData.dimensions?.height} x D: {pr.ItemData.dimensions?.depth}
              </S.Tt>
              <S.Tt>무게: {pr.ItemData.weight}kg</S.Tt>
              <S.Tt>배송정보: {pr.ItemData.shippingInformation}</S.Tt>
              <S.Tt>반품정보: {pr.ItemData.returnPolicy}</S.Tt>
              <S.Tt>보증정보: {pr.ItemData.warrantyInformation}</S.Tt>
            </div>
            <S.FlexBox>
              <S.CartBt>장바구니 담기</S.CartBt>
            </S.FlexBox>
          </S.RBox>
        </S.ContentBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItemDetail;
