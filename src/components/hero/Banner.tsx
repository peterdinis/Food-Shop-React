import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-[url(https://ca-times.brightspotcdn.com/dims4/default/4f9761e/2147483647/strip/true/crop/3500x1969+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa3%2Fbc%2F967153f7443ab69d6b182b91b1f4%2Ffo-quickbites-07102022-02.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-6xl font-extrabold sm:text-5xl">
           Food Reshop
            <strong className="mt-4 text-2xl block font-extrabold text-rose-700">
              Quality food for good prices
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos culpa sequi. Amet ad vel sed asperiores tempora exercitationem eos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link 
              to="/products"
              className="block w-full rounded bg-white px-12 py-3 text-xl font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
