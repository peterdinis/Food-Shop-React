import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IPaymentModalProps {
  children?: ReactNode;
}

const PaymentModal: React.FC<IPaymentModalProps> = ({
  children,
}: IPaymentModalProps) => {
  const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <h2 className="text-center mt-4 text-lg font-bold">Pay for order</h2><br />
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
