import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux';

import ScrollToTop from '@/shared/hooks/ScrollToTop';
import AuthAndUserInfo from '@/shared/hooks/useAuthAndUserInfo';
import AppRouter from '@/app/router';

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
