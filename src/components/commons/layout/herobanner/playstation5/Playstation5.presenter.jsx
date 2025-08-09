import * as S from './Playstation5.styled';

const Playstation5UI = () => {
  return (
    <S.Playstation5>
      <S.Playstation5Img src='../../../../../public/HeroBanner/PlayStation.png' />
      <S.Playstation5TextBox>
        <S.TitleText>Playstation 5</S.TitleText>
        <S.SubText>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</S.SubText>
      </S.Playstation5TextBox>
    </S.Playstation5>
  );
};

export default Playstation5UI;
