import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {useState, ReactNode} from "react";

interface IPaymentModalProps {
  children?: ReactNode
}

const PaymentModal: React.FC<IPaymentModalProps> = ({children}: IPaymentModalProps) => {
  const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string);

  return (
    <>
      <Elements stripe={promise}>
        <form>
          <CardElement />
          <button className="bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full">
            Pay
          </button>
        </form>
      </Elements>
    </>
  );
};

export default PaymentModal;
