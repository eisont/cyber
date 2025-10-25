import { OriginalPrice } from '@/shared/lib';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText, DumImg } from '@/shared/assets/styled/skeleton';
import * as S from '@/pages/Explore/Detail/ui/ProductItemDetail/ProductItemDetail.styled';
import type { Product } from '@/shared/types/api/product';

const ProductItemDetail = () => {
  const params = useParams<{ id: string }>();
  const productId = params.id;

  const [product, isLoading] = useFetch<Partial<Product>>({
    resource: 'products',
    endPoint: productId ? [productId] : [],
    enabled: Boolean(productId),
    initialData: {},
  });

  const tags = product.tags ?? [];
  const priceValue = typeof product.price === 'number' ? product.price : 0;
  const discountPercentage =
    typeof product.discountPercentage === 'number' ? product.discountPercentage : 0;
  const hasDiscount = priceValue > 0 && discountPercentage > 0;
  const originalPrice = hasDiscount
    ? OriginalPrice({ price: priceValue, discountPercentage })
    : null;

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>
          {isLoading ? <DumText width="400px" height="46px" /> : product.title ?? '상품 정보'}
        </S.Title>
        <S.TagsBox>
          {isLoading ? (
            <S.Tags>
              <DumText width="50px" height="17px" />
            </S.Tags>
          ) : (
            tags.map((tag) => (
              <S.Tags key={tag}>#{tag}</S.Tags>
            ))
          )}
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text>{' '}
            {isLoading ? <DumText width="50px" height="15px" /> : product.brand ?? '없음'}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text>
            {isLoading ? <DumText width="50px" height="15px" /> : product.category ?? '-'}
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text>
            {isLoading ? <DumText width="50px" height="15px" /> : product.sku ?? '-'}
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ImgBox>
            {isLoading ? (
              <DumImg width="500px" height="500px" />
            ) : (
              <S.ProductImg src={product.thumbnail} alt={product.title ?? '상품 이미지'} />
            )}
          </S.ImgBox>

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>
                  {isLoading ? (
                    <DumText width="70px" height="30px" />
                  ) : originalPrice !== null ? (
                    <>${originalPrice.toLocaleString()}</>
                  ) : (
                    '-'
                  )}
                </S.OriginalPrice>
                <S.DiscountPercentage>
                  {isLoading ? (
                    <DumText width="50px" height="15px" />
                  ) : (
                    <>-{discountPercentage}%</>
                  )}
                </S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>
                {isLoading ? (
                  <DumText width="100px" height="20px" />
                ) : (
                  <>${priceValue.toLocaleString()}</>
                )}
              </S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text>{' '}
                  {isLoading ? <DumText width="50px" height="20px" /> : product.stock ?? '-'}
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text>{' '}
                  {isLoading ? (
                    <DumText width="50px" height="20px" />
                  ) : (
                    product.availabilityStatus ?? '-'
                  )}
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text>⭐️{' '}
                {isLoading ? <DumText width="50px" height="20px" /> : product.rating ?? '-'}
              </S.Tt>

              <S.Description>
                {isLoading ? (
                  <DumText width="550px" height="60px" />
                ) : (
                  product.description ?? '-'
                )}
              </S.Description>
              <S.Tt>
                크기: W:{' '}
                {isLoading ? (
                  <DumText width="50px" height="10px" />
                ) : (
                  product.dimensions?.width ?? '-'
                )}{' '}
                x H:{' '}
                {isLoading ? (
                  <DumText width="50px" height="10px" />
                ) : (
                  product.dimensions?.height ?? '-'
                )}{' '}
                x D:{' '}
                {isLoading ? (
                  <DumText width="50px" height="10px" />
                ) : (
                  product.dimensions?.depth ?? '-'
                )}
              </S.Tt>
              <S.Tt>
                무게:{' '}
                {isLoading ? <DumText width="30px" height="15px" /> : product.weight ?? '-'}kg
              </S.Tt>
              <S.Tt>
                배송정보:{' '}
                {isLoading ? (
                  <DumText width="100px" height="15px" />
                ) : (
                  product.shippingInformation ?? '-'
                )}
              </S.Tt>
              <S.Tt>
                반품정보:{' '}
                {isLoading ? (
                  <DumText width="100px" height="15px" />
                ) : (
                  product.returnPolicy ?? '-'
                )}
              </S.Tt>
              <S.Tt>
                보증정보:{' '}
                {isLoading ? (
                  <DumText width="100px" height="15px" />
                ) : (
                  product.warrantyInformation ?? '-'
                )}
              </S.Tt>
            </div>
            <S.FlexBox>
              <S.CartBt type="button">장바구니 담기</S.CartBt>
            </S.FlexBox>
          </S.RBox>
        </S.ContentBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItemDetail;
