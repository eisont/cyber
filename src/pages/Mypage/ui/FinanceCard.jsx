// FinanceCard.jsx
import * as S from '../MyPage.styled';
const mask = (num = '') => num.replace(/\d(?=\d{4})/g, '*');
export default function FinanceCard({ user }) {
  const b = user.bank || {};
  const k = user.crypto || {};
  return (
    <S.Card>
      <S.Title>금융 · Crypto</S.Title>
      <S.Row>
        <S.Label>카드</S.Label>
        <S.Value>
          {b.cardType} · {mask(b.cardNumber)} ({b.cardExpire})
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>통화/IBAN</S.Label>
        <S.Value>
          {b.currency} · {b.iban}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>코인/네트워크</S.Label>
        <S.Value>
          {k.coin} · {k.network}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>지갑</S.Label>
        <S.Value>{k.wallet}</S.Value>
      </S.Row>
    </S.Card>
  );
}
