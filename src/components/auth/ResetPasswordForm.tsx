import { Header } from "../shared";
import useSearchQuery from "../../hooks/useSearchQuery";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

type FormData = {
  password: string;
};

const ResetPasswordForm: React.FC = () => {
  const query = useSearchQuery();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<FormData>();

  const onHandleSubmit = (data: FormData) => {
    try {
      resetPassword(query.get("oobCode"), data.password);
      navigate("/login");
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
                {...register("password", {
                  required: "You must specify a password",
                  pattern: {
                    value:
                      "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$" as any,
                    message:
                      "Password should contain at least one number and one    special character",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be more than 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be less than 20 characters",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
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

export default ResetPasswordForm;
