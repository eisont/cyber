import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import styled from '@emotion/styled';

type BannerStyleProps = {
  $background?: string;
  $color?: string;
  $hover?: string;
};

const Wrapper = styled(FlexCenter)<Pick<BannerStyleProps, '$background'>>`
  width: 360px;
  height: 552px;
  cursor: default;

  background: ${({ $background }) => $background};
`;

const MainBox = styled(FlexColBetween)`
  width: 297px;
  height: 485px;
`;
const ItemImg = styled.img`
  width: 297px;
`;
const ItemText = styled.div<Pick<BannerStyleProps, '$color'>>`
  font-size: 33px;
  font-weight: 300;
  color: ${({ $color }) => $color};
`;
const ItemBt = styled.button<BannerStyleProps>`
  width: 191px;
  height: 56px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ $background }) => $background};

  &:hover {
    cursor: pointer;
    background: ${({ $hover }) => $hover};
  }
`;

type Props = {
  id: string;
  img: string;
  alt: string;
  hover: string;
  background: string;
  color: string;
  text: string;
  button: string;
};

const CategoryPromoBannerItem = (pr: Props) => {
  return (
    <Wrapper $background={pr.background}>
      <MainBox>
        <ItemImg src={`img/CategoryPromoBanner/${pr.img}`} alt={pr.alt} />
        <ItemText $color={pr.color}>{pr.text}</ItemText>
        <ItemBt $color={pr.color} $background={pr.background} $hover={pr.hover}>
          {pr.button}
        </ItemBt>
      </MainBox>
    </Wrapper>
  );
};

export default CategoryPromoBannerItem;
