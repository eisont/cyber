import { useSearchFetch } from '@/shared/hooks/useFetchHooks';
import styled from '@emotion/styled';
import ProductItem from '@/shared/ui/ProductItem';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { useSelector } from 'react-redux';
import { DumBox } from '@/shared/assets/styled/skelepton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainBox = styled(FlexCenter)`
  padding: 30px 0;
  width: 1140px;
  height: 100vh;
  gap: 0 16px;

  overflow-y: auto;

  align-items: start;
  justify-content: start;

  flex-wrap: wrap;
`;

const SearchProducts = () => {
  const searchData = useSelector((state) => state.setSearchData);
  const [data, ProductListisLoading] = useSearchFetch({ searchData, enabled: true });
  const ProductListData = data.products;

  return (
    <Wrapper>
      <MainBox>
        {ProductListData?.length && !ProductListisLoading ? (
          <>
            {ProductListData?.map((el) => (
              <ProductItem key={el.id} ItemData={el} isLoading={ProductListisLoading} />
            ))}
          </>
        ) : ProductListData?.length || ProductListisLoading ? (
          <>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <ProductItem key={i} isLoading={ProductListisLoading} />
              ))}
          </>
        ) : (
          <DumBox>검색 결과 없습니다.</DumBox>
        )}
      </MainBox>
    </Wrapper>
  );
};

export default SearchProducts;
