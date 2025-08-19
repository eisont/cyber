import { useState } from 'react';
import { FilterCategory, FilterOptions } from '../../../../commons/monks/filter/filterOptions.monk';
import * as S from './Fiter.styld';

const Fiter = () => {
  const [toggle, setToggle] = useState({ id: 0, status: false });

  return (
    <S.Wrapper>
      {FilterCategory.map((el) => (
        <S.CategoryBox key={el.id}>
          <S.TitleBox>
            <S.Title>{el.category}</S.Title>
            <S.Arrow
              onClick={() =>
                setToggle((prev) => ({
                  id: el.id,
                  status: !prev.status,
                }))
              }
              toggle={toggle.status}
              src='../../../../../public/filter/expandLess.png'
            />
          </S.TitleBox>
          <S.Hr />
          {el.id === toggle.id && toggle.status && (
            <>
              <S.SearchBox>
                <S.SearchIcon src='../../../../../public/icon/Search.png' />
                <S.Input type='text' placeholder='Search'></S.Input>
              </S.SearchBox>
              <S.BrandBox>
                {FilterOptions.map((el) => (
                  <S.BrandInBox key={el.id}>
                    <S.CheckBox type='checkbox' />
                    <S.BrandBox>{el.title}</S.BrandBox>
                    <S.Number>{el.number}</S.Number>
                  </S.BrandInBox>
                ))}
              </S.BrandBox>
            </>
          )}
        </S.CategoryBox>
      ))}
    </S.Wrapper>
  );
};

export default Fiter;
