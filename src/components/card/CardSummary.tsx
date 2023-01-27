import { useCardValue } from "../../context/CardContext";

const CardSummary: React.FC = () => {
  const [state, dispatch] = useCardValue() as any;
  return (
    <>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {state.count}</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
