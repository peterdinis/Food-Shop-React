import { useForm } from 'react-hook-form';
import {useMutation} from "@tanstack/react-query";
import * as api from "../../api/mutations/authMutations";
import {toast} from "react-toastify";
import { ILoginUser } from '../../api/interfaces/IUser';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Login failed");


  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<ILoginUser>();

  const mutation = useMutation(api.loginUser, {
    onSuccess: () => {
      notify();
    },

    onError: () => {
      errorRegister();
    }
  })

  const onHandleSubmit = (data: ILoginUser) => {
    try {
      mutation.mutate(data);
      navigate('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3 className="text-center mt-10 text-4xl">Login</h3>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Email
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="email"
                placeholder="email@email.com"
                type="email"
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
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Password
              </label>
              <input
                className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                autoComplete="off"
                placeholder="*****************************"
                required={true}
                {...register('password', {
                  required: 'You must specify a password',
                  pattern: {
                    value:
                      '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$' as any,
                    message:
                      'Password should contain at least one number and one    special character',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must be more than 8 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Password must be less than 20 characters',
                  },
                })}
                onKeyUp={() => {
                  trigger('password');
                }}
              />

              <p className="text-red-800">
                {errors.password && errors.password.message}
              </p>
            </div>
          </div>
          <div>
            <button
              className="mt-4 bg-blue-100 p-2 rounded-lg font-bold"
              type="submit"
            >
              Login
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;