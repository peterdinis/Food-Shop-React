import { useCardValue } from '../../context/CardContext';
import { getBasketTotal } from '../../context/reducers/cardReducer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CardSummary: React.FC = () => {
  const [state, dispatch] = useCardValue() as any;

  const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string);

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
          <Elements stripe={promise}>
            <button className="bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full">
              Pay
            </button>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
