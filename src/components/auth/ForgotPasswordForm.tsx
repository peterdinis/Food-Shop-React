import { Header } from '../shared';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

type FormData = {
  email: string;
};

const ForgotPasswordForm: React.FC = () => {
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<FormData>();

  const onHandleSubmit = (data: FormData) => {
    try {
      forgotPassword(data.email);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header text="Reset Password" />
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="**********************************"
                autoComplete="off"
                required={true}
                {...register('email', {
                  required: 'Email is Required!!!',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                onKeyUp={() => {
                  trigger('email');
                }}
              />

              <p className="text-red-800">
                {errors.email && errors.email.message}
              </p>
            </div>
          </div>
          <div>
            <button
              className="mt-4 bg-blue-100 p-2 rounded-lg font-bold"
              type="submit"
            >
              Register
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
