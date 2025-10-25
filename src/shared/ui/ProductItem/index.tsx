import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { productIdSlice } from '@/redux';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import * as S from '@/shared/ui/ProductItem/ProductItem.styled';
import { DumImg, DumText } from '@/shared/assets/styled/skeleton';
import { OriginalPrice } from '@/shared/lib';
import type { Product } from '@/shared/types/api/product';

type ProductItemProps = Partial<Product> & {
  isLoading?: boolean;
};

const ProductItemComponent = ({
  isLoading = false,
  ...product
}: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const { ref } = useIntersectionObserver<HTMLImageElement>();

  const handleNavigate = useCallback(() => {
    if (!product.category || typeof product.id !== 'number') return;

    dispatch(productIdSlice.actions.getProductId(product.category));
    navigate(`/explore/${product.id}`);
  }, [dispatch, navigate, product.category, product.id]);

  const toggleCartIcon = useCallback(() => {
    setIsInCart((prev) => !prev);
  }, []);

  const ratingLabel = product.rating ?? 0;
  const reviewsCount = product.reviews?.length ?? 0;
  const hasDiscount =
    typeof product.price === 'number' && typeof product.discountPercentage === 'number';
  const originalPrice = hasDiscount
    ? OriginalPrice({
        price: product.price as number,
        discountPercentage: product.discountPercentage as number,
      })
    : undefined;
  const priceValue = typeof product.price === 'number' ? product.price : 0;
  const formattedOriginalPrice = originalPrice !== undefined ? originalPrice.toLocaleString() : null;

  return (
    <S.Wrapper>
      {product.stock === 0 && <S.SoldOutBox>SoldOut</S.SoldOutBox>}
      <S.MainBox>
        <S.IconBox>
          <S.FlexBox>
            <div>⭐️{ratingLabel}</div>
            <div style={{ marginLeft: '10px' }}>({reviewsCount})</div>
          </S.FlexBox>
          <S.CartIcon onClick={toggleCartIcon} role="button" tabIndex={0}>
            {isInCart ? (
              AddToCartSVG({ size: '24', color: '#292d32', insideColor: 'yellowgreen' })
            ) : (
              EmptyCartSVG({ size: '24', color: '#292d32' })
            )}
          </S.CartIcon>
          <S.MobileCartIcon onClick={toggleCartIcon} role="button" tabIndex={0}>
            {isInCart ? (
              AddToCartSVG({ size: '20', color: '#292d32', insideColor: 'yellowgreen' })
            ) : (
              EmptyCartSVG({ size: '20', color: '#292d32' })
            )}
          </S.MobileCartIcon>
        </S.IconBox>
        {isLoading ? (
          <>
            <DumImg width="160px" height="160px" />
            <DumText width="160px" height="15px" />
            <DumText width="100px" height="15px" />
          </>
        ) : (
          <>
            <S.Img
              ref={ref}
              data-src={product.thumbnail ?? ''}
              src={product.thumbnail ?? ''}
              alt={product.title ?? 'product-thumbnail'}
            />
            <S.Title>{product.title ?? '상품 정보를 불러오는 중입니다.'}</S.Title>
            <S.PriceBox>
              {hasDiscount && formattedOriginalPrice !== null && (
                <S.Price>${formattedOriginalPrice}</S.Price>
              )}
              {hasDiscount && product.discountPercentage !== undefined && (
                <S.DiscountPercent>{product.discountPercentage}%</S.DiscountPercent>
              )}
            </S.PriceBox>
            <S.DiscountedPrice>
              ${priceValue.toLocaleString()}
            </S.DiscountedPrice>
          </>
        )}

        <S.Button type="button" onClick={handleNavigate}>
          Detail
        </S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

const ProductItem = memo(ProductItemComponent);

export default ProductItem;
