import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/app/router';
import { store } from '@/redux';
import ScrollToTop from '@/shared/hooks/ScrollToTop';
import AuthAndUserInfo from '@/shared/hooks/useAuthAndUserInfo';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <AuthAndUserInfo />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
