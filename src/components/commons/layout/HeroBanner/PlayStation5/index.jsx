import * as S from './PlayStation5.styled';

const PlayStation5 = () => {
  return (
    <S.Wrapper>
      <S.Playstation5Img src='../../../../../public/img/HeroBanner/PlayStation5.png' alt='PlayStation5' />
      <S.Playstation5TextBox>
        <S.TitleText>Playstation 5</S.TitleText>
        <S.SubText>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</S.SubText>
      </S.Playstation5TextBox>
    </S.Wrapper>
  );
};

export default PlayStation5;
