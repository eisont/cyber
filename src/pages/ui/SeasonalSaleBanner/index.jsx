import styled from '@emotion/styled';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexCenter)`
  width: 100%;
`;
const Background = styled(FlexCenter)`
  width: 1440px;
  height: 447px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('img/HeroBanner/SeasonalSaleBanner.webp');
`;
const Banner2TextBox = styled.div`
  text-align: center;
  cursor: default;
`;

const TitleText = styled.div`
  font-size: 72px;
  font-weight: 500;
  letter-spacing: -1px;
  color: #fff;
`;
const SubText = styled.div`
  font-size: 16px;
  color: rgba(100, 100, 100, 0.4);
`;
const Botton = styled.button`
  margin: 20px 0 0 0;
  width: 191px;
  height: 56px;

  border: 1px solid #fff;
  background: none;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  :hover {
    background: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }
`;

const SeasonalSaleBanner = () => {
  return (
    <Wrapper>
      <Background>
        <Banner2TextBox>
          <TitleText>
            <span style={{ fontWeight: '100' }}>Big Summer </span> Sale
          </TitleText>
          <SubText>Commodo fames vitae vitae leo mauris in. Eu consequat.</SubText>
          <Botton>Shop Now</Botton>
        </Banner2TextBox>
      </Background>
    </Wrapper>
  );
};

export default SeasonalSaleBanner;
