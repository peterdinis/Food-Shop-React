import { useCardValue } from '../../context/CardContext';

const CardHeader: React.FC = () => {
  const [state] = useCardValue() as any;
  return (
    <>
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{state.count} Items</h2>
      </div>
    </>
  );
};

export default CardHeader;
