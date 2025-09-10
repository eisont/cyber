import { OriginalPrice } from '@/shared/lib';
import * as S from './ProductItemDetail.styled';

const ProductItemDetail = (pr) => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>{pr.data.title}</S.Title>
        <S.TagsBox>
          {pr.data.tags?.map((el) => (
            <S.Tags key={el}>#{el}</S.Tags>
          ))}
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text> {pr.data.brand || '없음'}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text> {pr.data.category}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text> {pr.data.sku}
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ProductImg src={pr.data.thumbnail} alt='thumbnail' />

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>${OriginalPrice(pr.data)}</S.OriginalPrice>
                <S.DiscountPercentage>-{pr.data.discountPercentage}%</S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>${pr.data.price}</S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text> {pr.data.stock}
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text> {pr.data.availabilityStatus}
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text> {pr.data.rating}
              </S.Tt>

              <S.Description>{pr.data.description}</S.Description>
              <S.Tt>
                크기: W: {pr.data.dimensions?.width} x H: {pr.data.dimensions?.height} x D: {pr.data.dimensions?.depth}
              </S.Tt>
              <S.Tt>무게: {pr.data.weight}kg</S.Tt>
              <S.Tt>배송정보: {pr.data.shippingInformation}</S.Tt>
              <S.Tt>반품정보: {pr.data.returnPolicy}</S.Tt>
              <S.Tt>보증정보: {pr.data.warrantyInformation}</S.Tt>
            </div>
            <S.FlexBox>
              <S.SellBt>구매하기</S.SellBt>
              <S.CartBt>장바구니 담기</S.CartBt>
            </S.FlexBox>
          </S.RBox>
        </S.ContentBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItemDetail;
