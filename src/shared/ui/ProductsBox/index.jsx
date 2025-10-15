import { useFetch } from '@/shared/hooks/useFetchHooks';
import { useSelector } from 'react-redux';
import * as S from '@/shared/ui/ProductsBox/ProductsBox.styled';
import ProductItem from '@/shared/ui/ProductItem';
import RecipesItem from '@/shared/ui/RecipesItem';
import { useState } from 'react';
import Modal from '@/shared/ui/Modal';

const ProductsBox = () => {
  const [selectId, setSelectId] = useState();
  const productId = useSelector((state) => state.productId);

  const [Pdata, isLoading] = useFetch({ resource: 'products', endPoint: 'category', suffix: '/', params: productId, enabled: true });
  const ProductListData = Pdata.products;

  const [Rdata] = useFetch({ resource: 'recipes', endPoint: '?limit=50', suffix: '', enabled: true });
  const RecipesData = Rdata.recipes;

  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.ProductsCount>
          Selected Products: <S.Count>{ProductListData?.length || RecipesData?.length}</S.Count>
        </S.ProductsCount>
      </S.FlexBox>

      {productId !== 'recipes' && (
        <S.ProductsBox>
          {isLoading ? (
            <>
              {Array(4)
                .fill('')
                .map((_, i) => (
                  <ProductItem key={i} isLoading />
                ))}
            </>
          ) : (
            <>
              {ProductListData.map((el) => (
                <ProductItem key={el.id} {...el} />
              ))}
            </>
          )}
        </S.ProductsBox>
      )}

      {productId === 'recipes' && (
        <S.ProductsBox>
          {RecipesData?.map((el) => (
            <RecipesItem key={el.id} {...el} setSelectId={setSelectId} />
          ))}
          {selectId && <Modal data={RecipesData.find((el) => el.id === selectId)} onClose={() => setSelectId(null)} />}
        </S.ProductsBox>
      )}
    </S.Wrapper>
  );
};

export default ProductsBox;
