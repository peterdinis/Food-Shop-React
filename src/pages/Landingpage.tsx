import { Suspense } from 'react';
import { Banner, StoreServices } from '../components/hero';
import { FallBackLoader, Footer } from '../components/shared';

const LandingPage: React.FC = () => {
  return (
    <Suspense fallback={<FallBackLoader />}>
      <Banner />
      <StoreServices />
      <Footer />
    </Suspense>
  );
};

export default LandingPage;
