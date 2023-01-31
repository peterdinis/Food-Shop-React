import React from 'react';

export const DisplayAllProducts = React.lazy(
  () => import('./DisplayAllProducts')
);

export const ProductInfo = React.lazy(() => import('./ProductInfo'));
