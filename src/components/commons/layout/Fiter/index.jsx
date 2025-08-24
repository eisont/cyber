import { useState } from 'react';
import * as S from './Fiter.styld';
import { ExpandDownSVG, SearchSVG } from '../../../../shared/assets/SVGicons/24pxIcon';
import { useCategroy } from '../../../../commons/api/filterApi';
import { useProductId } from '../../../../context/productIdContext';
import { ToUpper } from '../../../../shared/lib';

const Fiter = () => {
  const [toggle, setToggle] = useState(false);

  const data = useCategroy();
  const CategoryData = data[0][0];

  const [productId, setProductId] = useProductId();

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox>
          <S.Title>Category</S.Title>
          <S.Arrow onClick={() => setToggle((prev) => !prev)} toggle={toggle}>
            {ExpandDownSVG('#191919')}
          </S.Arrow>
        </S.TitleBox>
        {toggle ? (
          <>
            <S.SearchBox>
              <S.SearchIcon>{SearchSVG('#989898')}</S.SearchIcon>
              <S.Input type='text' placeholder='Search'></S.Input>
            </S.SearchBox>
            <S.BrandBox>
              {CategoryData.map((el) => (
                <S.BrandInBox key={el.slug}>
                  <S.Brand id={el.slug} onClick={(e) => setProductId(e.target.id)} productId={ToUpper(productId)} name={el.name}>
                    {el.name}
                  </S.Brand>
                </S.BrandInBox>
              ))}
            </S.BrandBox>
          </>
        ) : (
          <></>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default Fiter;
