import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux';
import Layout from '@/pages/Layout';
import ScrollToTop from '@/shared/hooks/ScrollToTop';
import AuthAndUserInfo from '@/shared/hooks/useAuthAndUserInfo';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <AuthAndUserInfo />
      <Layout />
    </Provider>
  </BrowserRouter>
);
