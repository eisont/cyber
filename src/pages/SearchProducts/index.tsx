import { useSearchFetch } from '@/shared/hooks/useFetchHooks';
import styled from '@emotion/styled';
import ProductItem from '@/shared/ui/ProductItem';
import { useAppSelector } from '@/redux/hooks';
import { DumBox } from '@/shared/assets/styled/skeleton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainBox = styled.div`
  padding: 30px 0;
  width: 1140px;
  height: 100vh;
  gap: 0 16px;

  overflow-y: auto;

  display: flex;
  align-items: start;
  justify-content: start;

  flex-wrap: wrap;
`;

const SearchProducts = () => {
  const searchData = useAppSelector((state) => state.setSearchData);
  const [searchResult, isLoading] = useSearchFetch({ searchData, enabled: true });
  const productList = searchResult.products ?? [];
  const hasProducts = productList.length > 0;

  return (
    <Wrapper>
      <MainBox>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => <ProductItem key={index} isLoading />)
        ) : hasProducts ? (
          productList.map((product) => <ProductItem key={product.id} {...product} />)
        ) : (
          <DumBox>검색 결과 없습니다.</DumBox>
        )}
      </MainBox>
    </Wrapper>
  );
};

export default SearchProducts;
