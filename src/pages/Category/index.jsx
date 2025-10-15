import { Outlet, useParams } from 'react-router-dom';
import Filter from '@/pages/Category/ui/Filter';
import ProductsBox from '@/pages/Category/ui/ProductsBox';
import Breadcrumb from '@/pages/Category/ui/Breadcrumb';
import * as S from '@/pages/Category/Category.styled';

const Category = () => {
  const parama = useParams();

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <Breadcrumb />
        {!parama.id ? (
          <S.FlexBox>
            <Filter />
            <ProductsBox />
          </S.FlexBox>
        ) : (
          <Outlet />
        )}
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Category;
