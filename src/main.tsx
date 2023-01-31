import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FallBackLoader } from './components/shared';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CardProvider } from './context/CardContext';
import stateReducer from './context/reducers/cardReducer';
import { initialState } from './typings/reduxTypings';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<FallBackLoader />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CardProvider reducer={stateReducer} initialState={initialState}>
            <App />
            <ReactQueryDevtools />
          </CardProvider>
          <ToastContainer />
        </QueryClientProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
