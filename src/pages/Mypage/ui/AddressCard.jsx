import * as S from '@/pages/Mypage/MyPage.styled';

const AddressCard = ({ user }) => {
  const a = user.address || {};
  return (
    <S.Card>
      <S.Title>주소</S.Title>
      <S.Row>
        <S.Label>주소</S.Label>
        <S.Value>{a.address}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>도시/주</S.Label>
        <S.Value>
          {a.city}, {a.state} ({a.stateCode})
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>우편번호</S.Label>
        <S.Value>{a.postalCode}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>국가</S.Label>
        <S.Value>{a.country}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default AddressCard;
