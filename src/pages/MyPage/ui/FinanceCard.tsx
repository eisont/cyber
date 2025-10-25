import * as S from '@/pages/MyPage/MyPage.styled';
import type { User } from '@/shared/types/api/user';

type FinanceCardProps = {
  user: Partial<User>;
};

const mask = (num: string = ''): string => num.replace(/\d(?=\d{4})/g, '*');

const FinanceCard = ({ user }: FinanceCardProps) => {
  const bank = user.bank;
  const crypto = user.crypto;
  return (
    <S.Card>
      <S.Title>금융 · Crypto</S.Title>
      <S.Row>
        <S.Label>카드</S.Label>
        <S.Value>
          {bank
            ? `${bank.cardType ?? '-'} · ${mask(bank.cardNumber)} (${bank.cardExpire ?? '-'})`
            : '-'}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>통화/IBAN</S.Label>
        <S.Value>{bank ? `${bank.currency ?? '-'} · ${bank.iban ?? '-'}` : '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>코인/네트워크</S.Label>
        <S.Value>{crypto ? `${crypto.coin ?? '-'} · ${crypto.network ?? '-'}` : '-'}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>지갑</S.Label>
        <S.Value>{crypto?.wallet ?? '-'}</S.Value>
      </S.Row>
    </S.Card>
  );
};
export default FinanceCard;
