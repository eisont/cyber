import { CamerasSVG, ComputersSVG, GamingSVG, HeadphonesSVG, PhonesSVG, SmartWatchesSVG } from '../../../../shared/assets/SVGicons/48pxIcon';
import CategoryItem from '../../components/CategoryItem';
import * as S from './CategoryHighlight.styled';

const CategoryHighlight = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Category</S.Top>
          <S.Categories>
            <CategoryItem img={PhonesSVG('#000', '#fff')} title='Phones'></CategoryItem>
            <CategoryItem img={SmartWatchesSVG('#000', '#fff')} title='SmartWatches'></CategoryItem>
            <CategoryItem img={CamerasSVG('#000', '#fff')} title='Cameras'></CategoryItem>
            <CategoryItem img={ComputersSVG('#000', '#fff')} title='Computers'></CategoryItem>
            <CategoryItem img={GamingSVG('#000', '#fff')} title='Gaming'></CategoryItem>
            <CategoryItem img={HeadphonesSVG('#000', '#fff')} title='Headphones'></CategoryItem>
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlight;
