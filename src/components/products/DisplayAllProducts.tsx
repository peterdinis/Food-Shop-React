import { FallBackLoader, Header } from '../shared';
import useImageOnLoad from '../../hooks/useImageLoad';
import { style } from './style';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api/queries/productQueries';
import ScrollToTop from '../../hooks/useScroll';
import FallbackRender from '../shared/FallbackRender';
import { IProduct } from '../../api/interfaces/IProduct';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DisplayAllProducts: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    ['products'],
    api.getAllProducts
  );
  const { handleImageOnLoad } = useImageOnLoad();

  if (isLoading) {
    return <FallBackLoader />;
  }

  if (isError) {
    return <FallbackRender error="Something went wrong" />;
  }

  return (
    <>
      <section className="bg-white py-8">
        <Header text="All Foods" />
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {data &&
            data.map((item: IProduct) => {
              return (
                <>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <span>
                      <LazyLoadImage
                        style={{ ...style.image }}
                        className="hover:grow hover:shadow-lg"
                        src={item.image}
                        onLoad={handleImageOnLoad}
                      />
                      <div className="pt-3 flex items-center justify-between">
                        <p className="font-bold">{item.name}</p>
                        <button className="bg-blue-100 rounded-lg font-bold p-1">
                          <Link to={`/product/${item.id}`}>
                            Detail
                          </Link>
                        </button>
                      </div>
                      <p className="pt-1 text-gray-900 font-bold">
                        {item.price}
                      </p>
                    </span>
                  </div>
                </>
              );
            })}
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DisplayAllProducts;
