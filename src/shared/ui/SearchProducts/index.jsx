import useFetch from '@/shared/hooks/useFetch';
import styled from '@emotion/styled';
import ProductItem from '@/shared/ui/ProductItem';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { useSelector } from 'react-redux';

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
  const data = useFetch({ query: `https://dummyjson.com/products/search?q=${searchData}` });
  const ProductsData = data.products;

  return (
    <Wrapper>
      <MainBox>
        {ProductsData?.map((el) => (
          <ProductItem key={el.id} product={el} />
        ))}
      </MainBox>
    </Wrapper>
  );
};

export default SearchProducts;
