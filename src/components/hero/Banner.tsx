import { Link } from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";
import * as api from "../../api/queries/exampleQueries"
import { queryClient } from '../../api/queryClient';
import { FallBackLoader } from '../shared';
import FallbackRender from '../shared/FallbackRender';

const Banner: React.FC = () => {
  const {data, isLoading, isError} = useQuery(["example"], api.getExampleQuery);

  if(isLoading) {
    return <FallBackLoader />
  }

  if(isError) {
    return <FallbackRender error="Something went wrong" />
  }

  queryClient.setQueriesData(["exampleKey"], data);

  return (
    <section className="relative bg-[url(https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg)] bg-cover bg-center bg-no-repeat">
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
