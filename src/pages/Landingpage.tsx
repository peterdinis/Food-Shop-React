import { Banner, StoreServices } from '../components/hero';
import { ReviewWrapper } from '../components/reviews';
import { Footer } from '../components/shared';

const LandingPage: React.FC = () => {
  return (
    <>
      <Banner />
      <StoreServices />
      <ReviewWrapper />
      <Footer />
    </>
  );
};

export default LandingPage;
