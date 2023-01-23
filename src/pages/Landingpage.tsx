import { Banner, StoreServices } from "../components/hero";
import { Footer } from "../components/shared";

const LandingPage: React.FC = () => {
    return (
        <>
           <Banner />
           <StoreServices />
           <Footer />
        </>
    )
}

export default LandingPage;