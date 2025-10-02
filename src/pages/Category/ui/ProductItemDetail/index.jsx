import { OriginalPrice } from '@/shared/lib';
import * as S from './ProductItemDetail.styled';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/shared/hooks/useFetchHooks';

const ProductItemDetail = () => {
  const params = useParams();

  const [ItemData] = useFetch({ resource: 'products', endPoint: params.id, enabled: true });

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>{ItemData.title}</S.Title>
        <S.TagsBox>
          {ItemData.tags?.map((el) => (
            <S.Tags key={el}>#{el}</S.Tags>
          ))}
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text> {ItemData.brand || '없음'}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text> {ItemData.category}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text> {ItemData.sku}
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ImgBox>
            <S.ProductImg src={ItemData.thumbnail} alt='thumbnail' />
            <S.SubBox>{ItemData.images?.filter((el, i) => i > 0 && <S.SubImg src={el} key={i} />)}</S.SubBox>
          </S.ImgBox>

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>${OriginalPrice({ price: ItemData.price, discountPercentage: ItemData.discountPercentage })}</S.OriginalPrice>
                <S.DiscountPercentage>-{ItemData.discountPercentage}%</S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>${ItemData.price}</S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text> {ItemData.stock}
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text> {ItemData.availabilityStatus}
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text>⭐️ {ItemData.rating}
              </S.Tt>

              <S.Description>{ItemData.description}</S.Description>
              <S.Tt>
                크기: W: {ItemData.dimensions?.width} x H: {ItemData.dimensions?.height} x D: {ItemData.dimensions?.depth}
              </S.Tt>
              <S.Tt>무게: {ItemData.weight}kg</S.Tt>
              <S.Tt>배송정보: {ItemData.shippingInformation}</S.Tt>
              <S.Tt>반품정보: {ItemData.returnPolicy}</S.Tt>
              <S.Tt>보증정보: {ItemData.warrantyInformation}</S.Tt>
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
