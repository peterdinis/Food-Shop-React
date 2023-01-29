import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState, ReactNode, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { style } from './style';
import { motion } from 'framer-motion';

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
  const [processing, setProcessing] = useState(true);

  /* const stripe = useStripe(); */

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // const payload = await stripe?.confirmCardPayment();
  };

  const handleChange = async (e: any) => {
    e.preventDefault();
    setDisabled(e);
    setError(e.error.message);
  };

  return (
    <>
      <Elements stripe={promise}>
        <button
          className="bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full"
          onClick={handleOpen}
        >
          Pay for order
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 className="text-center mt-4 text-lg font-bold">
              Pay for order
            </h2>
            <br />
            <form className="mt-6" onSubmit={handleSubmit}>
              <CardElement />
              <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className="mt-10 bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full"
              >
                Pay
              </motion.button>
            </form>
            {error} && <div>{error}</div>
          </Box>
        </Modal>
      </Elements>
    </>
  );
};

export default PaymentModal;
