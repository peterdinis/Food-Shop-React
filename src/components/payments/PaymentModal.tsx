import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState, ReactNode, FormEvent, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {style} from "./style";

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

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Button onClick={handleOpen}>Pay</Button>
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
            <form>
              <CardElement />
              <button className="bg-blue-300 font-semibold rounded-lg py-3 text-sm text-black uppercase w-full">
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
