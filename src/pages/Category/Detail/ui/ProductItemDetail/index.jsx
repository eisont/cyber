import { OriginalPrice } from '@/shared/lib';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText, DumImg } from '@/shared/assets/styled/skelepton';
import * as S from '@/pages/Category/ui/ProductItemDetail/ProductItemDetail.styled';

const ProductItemDetail = () => {
  const params = useParams();

  const [ItemData, isLoading] = useFetch({ resource: 'products', endPoint: params.id, enabled: true });

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>{isLoading ? <DumText width='400px' height='46px' /> : <>{ItemData.title}</>}</S.Title>
        <S.TagsBox>
          {isLoading ? (
            <S.Tags>
              <DumText width='50px' height='17px' />
            </S.Tags>
          ) : (
            <>
              {ItemData.tags?.map((el) => (
                <S.Tags key={el}>#{el}</S.Tags>
              ))}
            </>
          )}
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text> {isLoading ? <DumText width='50px' height='15px' /> : <>{ItemData.brand || '없음'}</>}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text>
            {isLoading ? <DumText width='50px' height='15px' /> : <>{ItemData.category}</>}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text>
            {isLoading ? <DumText width='50px' height='15px' /> : <>{ItemData.sku}</>}
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ImgBox>
            {isLoading ? <DumImg width='500px' height='500px' /> : <S.ProductImg src={ItemData.thumbnail} alt='thumbnail' />}
            {/* <S.SubBox>{ItemData.images?.filter((el, i) => i > 0 && <S.SubImg src={el} key={i} />)}</S.SubBox> */}
          </S.ImgBox>

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>
                  {isLoading ? <DumText width='70px' height='30px' /> : <>$ {OriginalPrice({ price: ItemData.price, discountPercentage: ItemData.discountPercentage })}</>}
                </S.OriginalPrice>
                <S.DiscountPercentage>{isLoading ? <DumText width='50px' height='15px' /> : <> -{ItemData.discountPercentage}</>}%</S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>${isLoading ? <DumText width='100px' height='20px' /> : <>{ItemData.price}</>}</S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text> {isLoading ? <DumText width='50px' height='20px' /> : <>{ItemData.stock}</>}
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text> {isLoading ? <DumText width='50px' height='20px' /> : <>{ItemData.availabilityStatus}</>}
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text>⭐️ {isLoading ? <DumText width='50px' height='20px' /> : <>{ItemData.rating}</>}
              </S.Tt>

              <S.Description> {isLoading ? <DumText width='550px' height='60px' /> : <>{ItemData.description}</>}</S.Description>
              <S.Tt>
                크기: W: {isLoading ? <DumText width='50px' height='10px' /> : <>{ItemData.dimensions?.width}</>} x H:{' '}
                {isLoading ? <DumText width='50px' height='10px' /> : <>{ItemData.dimensions?.height}</>} x D: {isLoading ? <DumText width='50px' height='10px' /> : <>{ItemData.dimensions?.depth}</>}
              </S.Tt>
              <S.Tt>무게: {isLoading ? <DumText width='30px' height='15px' /> : <>{ItemData.weight}</>}kg</S.Tt>
              <S.Tt>배송정보: {isLoading ? <DumText width='100px' height='15px' /> : <>{ItemData.shippingInformation}</>}</S.Tt>
              <S.Tt>반품정보: {isLoading ? <DumText width='100px' height='15px' /> : <>{ItemData.returnPolicy}</>}</S.Tt>
              <S.Tt>보증정보: {isLoading ? <DumText width='100px' height='15px' /> : <>{ItemData.warrantyInformation}</>}</S.Tt>
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
