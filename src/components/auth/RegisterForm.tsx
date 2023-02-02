import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {useMutation} from "@tanstack/react-query";
import * as api from "../../api/mutations/authMutations";
import {toast} from "react-toastify";
import { IRegisterUser } from '../../api/interfaces/IUser';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  // TODO: Update later onSuccess, onError
  const mutation = useMutation(api.registerUser, {
    onSuccess: () => {
      notify();
    },

    onError: () => {
      errorRegister();
    }
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<IRegisterUser>();

  const onHandleSubmit = (data: IRegisterUser) => {
    try {
      mutation.mutate(data);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3 className="text-center mt-10 text-4xl">Register</h3>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="mb-4">
          <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Name
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="text"
                type="text"
                required={true}
                placeholder="Some name"
                {...register('name', {
                  required: 'Name is Required!!!',
                })}
                onKeyUp={() => {
                  trigger('name');
                }}
              />

              <p className="text-red-800">
                {errors.email && errors.email.message}
              </p>
            </div>

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
                type="email"
                required={true}
                placeholder="email@email.com"
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
                placeholder="**********************************"
                autoComplete="off"
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

export default RegisterForm;
