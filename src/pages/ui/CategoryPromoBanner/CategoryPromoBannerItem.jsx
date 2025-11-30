import styled from '@emotion/styled';

import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexCenter)`
  width: 360px;
  height: 552px;
  cursor: default;

  background: ${({ background }) => background};
`;

const MainBox = styled(FlexColBetween)`
  width: 297px;
  height: 485px;
`;
const ItemImg = styled.img`
  width: 297px;
`;
const ItemText = styled.div`
  font-size: 33px;
  font-weight: 300;
  color: ${({ color }) => color};
`;
const ItemBt = styled.button`
  width: 191px;
  height: 56px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ background }) => background};

  &:hover {
    cursor: pointer;
    background: ${({ hover }) => hover};
  }
`;

const CategoryPromoBannerItem = (pr) => {
  return (
    <Wrapper background={pr.ItemData.background}>
      <MainBox>
        <ItemImg src={`img/CategoryPromoBanner/${pr.ItemData.img}`} alt={pr.ItemData.alt} />
        <ItemText color={pr.ItemData.color}>{pr.ItemData.text}</ItemText>
        <ItemBt
          color={pr.ItemData.color}
          background={pr.ItemData.background}
          hover={pr.ItemData.hover}
        >
          {pr.ItemData.button}
        </ItemBt>
      </MainBox>
    </Wrapper>
  );
};

export default CategoryPromoBannerItem;
