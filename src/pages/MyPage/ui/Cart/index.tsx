import styled from '@emotion/styled';
import * as S from '@/pages/MyPage/MyPage.styled';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import type { CartResponse, Product } from '@/shared/types/api/product';

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f2f2f2;
  &:last-child {
    border-bottom: 0;
  }
`;

const Thumb = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
  background: #fafafa;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

const Price = styled.div`
  font-weight: 700;
  white-space: nowrap;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-weight: 700;
`;

const CartCard = () => {
  const [cartData] = useFetch<CartResponse>({
    resource: 'cart',
    path: 9,
    enabled: true,
    initialData: {
      id: 0,
      products: [],
      total: 0,
      discountedTotal: 0,
      userId: 0,
      totalProducts: 0,
      totalQuantity: 0,
    },
  });
  const items = cartData.products ?? [];

  const getQuantity = (item: Product) => item.qty ?? item.quantity ?? 1;

  const totalQty = items.reduce((sum, item) => sum + getQuantity(item), 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price ?? 0) * getQuantity(item), 0);

  return (
    <S.Card>
      <S.Title>장바구니</S.Title>

      {items.length === 0 ? (
        <div>장바구니가 비어 있어요.</div>
      ) : (
        <>
          {items.map((item) => (
            <ItemRow key={item.id}>
              <Thumb src={item.thumbnail ?? ''} alt={item.title ?? 'cart-item'} loading="lazy" />
              <div>
                <Title>{item.title}</Title>
                <div style={{ color: '#888', fontSize: 12 }}>
                  수량 {getQuantity(item)} · 개당 $
                  {(item.price ?? 0).toLocaleString()}
                </div>
              </div>
              <Price>${((item.price ?? 0) * getQuantity(item)).toLocaleString()}</Price>
            </ItemRow>
          ))}

          <Summary>
            <div>총 {totalQty}개</div>
            <div>${totalPrice.toLocaleString()}</div>
          </Summary>
        </>
      )}
    </S.Card>
  );
};

export default CartCard;
