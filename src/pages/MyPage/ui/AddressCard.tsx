import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type AddressCardProps = {
  user: Partial<User>;
};

const AddressCard = ({ user }: AddressCardProps) => {
  const address = user.address;
  return (
    <S.Card>
      <S.Title>주소</S.Title>
      <S.Row>
        <S.Label>주소</S.Label>
        <S.Value>{address?.address ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>도시/주</S.Label>
        <S.Value>
          {address ? `${address.city}, ${address.state} (${address.stateCode})` : '-'}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>우편번호</S.Label>
        <S.Value>{address?.postalCode ?? '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>국가</S.Label>
        <S.Value>{address?.country ?? '-'}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default AddressCard;
