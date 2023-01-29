import { useCardValue } from '../../context/CardContext';
import { PaymentModal } from '../payments';
import { motion } from 'framer-motion';

const CardSummary: React.FC = () => {
  const [state, dispatch] = useCardValue() as any;

  return (
    <>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">
            Total Items {state.basket.length}
          </span>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>1111€</span>
          </div>
          <PaymentModal />
        </div>
      </div>
    </>
  );
};

export default CardSummary;
