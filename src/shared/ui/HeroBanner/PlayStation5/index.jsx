import styled from '@emotion/styled';
import { FlexBetween } from '../../../assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  position: relative;
  width: 720px;
  height: 328px;
  background: #fff;
`;

const Playstation5TextBox = styled.div`
  position: absolute;
  width: 338px;
  height: 128px;
  left: 330px;
  cursor: default;
`;

const TitleText = styled.div`
  font-size: 49px;
  font-weight: 500;
  color: #000;
`;
const SubText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(144, 144, 144);
`;

const Playstation5Img = styled.img`
  width: 360px;
`;

const PlayStation5 = () => {
  return (
    <Wrapper>
      <Playstation5Img src='../../../../../public/img/HeroBanner/PlayStation5.webp' alt='PlayStation5' />
      <Playstation5TextBox>
        <TitleText>Playstation 5</TitleText>
        <SubText>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</SubText>
      </Playstation5TextBox>
    </Wrapper>
  );
};

export default PlayStation5;
