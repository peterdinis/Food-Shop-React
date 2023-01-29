import { Suspense } from 'react';
import { Banner, StoreServices } from '../components/hero';
import { ReviewWrapper } from '../components/reviews';
import { FallBackLoader, Footer } from '../components/shared';

const LandingPage: React.FC = () => {
  return (
    <Suspense fallback={<FallBackLoader />}>
      <Banner />
      <StoreServices />
      <ReviewWrapper />
      <Footer />
    </Suspense>
  );
};

export default LandingPage;
