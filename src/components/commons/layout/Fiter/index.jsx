import { useState } from 'react';
import * as S from './Fiter.styld';

const Fiter = (pr) => {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox>
          <S.Title>Category</S.Title>
          <S.Arrow onClick={() => setToggle((prev) => !prev)} toggle={toggle} src='../../../../../public/filter/expandLess.png' />
        </S.TitleBox>
        {toggle ? (
          <>
            <S.SearchBox>
              <S.SearchIcon src='../../../../../public/icon/Search.png' />
              <S.Input type='text' placeholder='Search'></S.Input>
            </S.SearchBox>
            <S.BrandBox>
              {pr.data.map((el) => (
                <S.BrandInBox key={el.slug}>
                  <S.Brand id={el.slug} onClick={(e) => pr.setProductId(e.target.id)} productId={pr.productId} name={el.name}>
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
