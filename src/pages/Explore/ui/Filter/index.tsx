import { useState } from 'react';
import * as S from '@/pages/Explore/ui/Filter/Filter.styled';
import { productIdSlice } from '@/redux';
import { ToUpper } from '@/shared/lib';
import { ExpandDownSVG } from '@/shared/assets/SVGicons';
import { useFetch } from '@/shared/hooks/useFetchHooks';
import { DumText } from '@/shared/assets/styled/skeleton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Filter = () => {
  const productId = useAppSelector((state) => state.productId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [categories, isLoading] = useFetch<string[]>({
    resource: 'products',
    path: 'category-list',
    enabled: true,
    initialData: [],
  });

  const handleItemSelect = (id: string, path: string) => {
    dispatch(productIdSlice.actions.getProductId(id));
    navigate(path);
    setIsOpen(false);
  };

  const isRecipesRoute = location.pathname === '/recipes';
  const activeCategoryLabel = isRecipesRoute ? 'Recipes' : ToUpper(productId);

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox
          $isActive={isRecipesRoute}
          onClick={() => handleItemSelect('', '/recipes')}
        >
          <S.Title>Recipes</S.Title>
        </S.TitleBox>
        <S.TitleBox onClick={() => setIsOpen((prev) => !prev)}>
          <S.Title>Products</S.Title>
          <S.Arrow $isOpen={isOpen}>{ExpandDownSVG({ size: '24', color: '#191919' })}</S.Arrow>
        </S.TitleBox>

        {isOpen && (
          <S.BrandBox>
            {isLoading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <S.BrandInBox key={index}>
                    <DumText width="160px" height="15px" />
                  </S.BrandInBox>
                ))
              : categories.map((category) => {
                  const categoryLabel = ToUpper(category);
                  const isActive = !isRecipesRoute && categoryLabel === activeCategoryLabel;
                  return (
                    <S.BrandInBox key={category}>
                      <S.Brand
                        onClick={() => handleItemSelect(category, '/Explore')}
                        $isActive={isActive}
                      >
                        {categoryLabel}
                      </S.Brand>
                    </S.BrandInBox>
                  );
                })}
          </S.BrandBox>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default Filter;
