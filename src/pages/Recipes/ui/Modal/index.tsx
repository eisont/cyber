import { memo } from 'react';
import { CloseSVG } from '@/shared/assets/SVGicons';
import * as S from '@/pages/Recipes/ui/RecipesItem/RecipesItem.styled';
import type { Recipe } from '@/shared/types/api/recipe';

type RecipesModalProps = {
  data: Recipe;
  onClose: () => void;
};

const ModalComponent = ({ data, onClose }: RecipesModalProps) => {
  return (
    <S.Modal role="dialog" aria-modal="true" aria-label={`${data.name} 레시피 상세`}>
      <S.Icon onClick={onClose}>{CloseSVG({ size: '50px', color: '#000' })}</S.Icon>

      <S.FlexBox>
        <S.ModalImg src={data.image} alt={data.name} />
        <S.ColFlexBox>
          <S.MText style={{ fontSize: '35px' }}>요리 순서</S.MText>
          {data.instructions.map((instruction, index) => (
            <S.MText key={`${instruction}-${index}`}>{`${index + 1}. ${instruction}`}</S.MText>
          ))}
        </S.ColFlexBox>
      </S.FlexBox>

      <S.MText style={{ fontSize: '35px' }}>재료 리스트</S.MText>
      <S.ListBox>
        {data.ingredients.map((ingredient) => (
          <ul key={ingredient}>
            <li style={{ color: '#fff' }}>{ingredient}</li>
          </ul>
        ))}
      </S.ListBox>
    </S.Modal>
  );
};

const Modal = memo(ModalComponent);

export default Modal;
