import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState, ReactNode, FormEvent} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {style} from "./style";
import PaymentInfo from './PaymentInfo';

interface IPaymentModalProps {
  children?: ReactNode;
}

const PaymentModal: React.FC<IPaymentModalProps> = ({
  children,
}: IPaymentModalProps) => {
  const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: FormEvent) => {
    return;
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setDisabled(e);
    setError(e.error.message)
  };

  return (
    <>
      <button className="bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full" onClick={handleOpen}>Pay for order</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Elements stripe={promise}>
            <h2 className="text-center mt-4 text-lg font-bold">
              Pay for order
            </h2>
            <br />
            <PaymentInfo />
            <br />
            <form className="mt-6" onSubmit={handleSubmit}>
              <CardElement />
              <button className="mt-10 bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full">
                Pay
              </button>
            </form>
          </Elements>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentModal;
