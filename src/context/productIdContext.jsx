import { createContext, useContext, useState } from 'react';

// 전역 상태 만들기
const counterContext = createContext();

// provider으로 전역상태 연결해주기
export const CounterProvider = ({ children }) => {
  const [productId, setProductId] = useState('beauty');

  return <counterContext.Provider value={[productId, setProductId]}>{children}</counterContext.Provider>;
};

// useContext로 전역 상태 가지고 와주기
export const useProductId = () => useContext(counterContext);
