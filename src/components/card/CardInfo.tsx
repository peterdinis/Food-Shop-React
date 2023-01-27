import ScrollToTop from "../../hooks/useScroll";
import CardHeader from "./CardHeader";
import CardSummary from "./CardSummary";
import CardTable from "./CardTable";
import WestIcon from '@mui/icons-material/West';

const CardInfo: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <CardHeader />
            <CardTable />
            <a
              href="/products"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
             <WestIcon />
              Continue Shopping
            </a>
          </div>
          <CardSummary />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default CardInfo;
