const LoginForm: React.FC = () => {
  return (
    <>
      <h3 className="text-center mt-10 text-4xl">Login</h3>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Používateľské meno
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              autoFocus
              placeholder="Meno"
              /*   {...register('username', {
                  required: true,
                  minLength: 5,
                  min: 5,
                })} */
            />

            {/*   <p className="text-red-800">
                {errors.username && errors.username.message}
              </p> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              autoFocus
              type="email"
              placeholder="Email"
              /*   {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })} */
            />

            {/*  <p className="text-red-800">
                {errors.email && errors.email.message}
              </p> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Heslo
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              autoFocus
              /* type={passwordShown ? 'text' : 'password'} */
              /*  placeholder="*********************************"
                {...register('password', {
                  required: true,
                })} */
            />

            {/*    <p className="text-red-800">
                {errors.password && errors.password.message}
              </p> */}
            {/*  <button onClick={togglePassword}>Zobraziť heslo</button> */}
          </div>
        </div>
        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Krstné meno
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Meno"
            /* {...register('firstname', { */
            /*   required: true, */
            /*   minLength: 5, */
            /*   min: 5, */
            /* })} */
          />

          {/* <p className="text-red-800">
              {errors.firstname && errors.firstname.message}
            </p> */}
        </div>
        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Priezvisko
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Priezvisko"
            /*  {...register('lastname', {
                required: true,
                minLength: 5,
                min: 5,
              })} */
          />

          {/*  <p className="text-red-800">
              {errors.lastname && errors.lastname.message}
            </p> */}
        </div>
        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Rola
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Žiak"
            /*   {...register('role', {
                required: true,
                minLength: 5,
                min: 5,
                value: 'Žiak',
              })} */
          />

          {/* <p className="text-red-800">{errors.role && errors.role.message}</p> */}
        </div>

        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Študentské id
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Vaše id"
            /*  {...register('externalId', {
                required: true,
                minLength: 5,
                min: 5,
              })} */
          />

          {/*  <p className="text-red-800">
              {errors.externalId && errors.externalId.message}
            </p> */}
        </div>
        <div>
          <button className="reg registerButton" type="submit">
            Registrácia
          </button>
          <div>
            <a
              className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
              href="/teacher/login"
            >
              Prihlásenie tu
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
