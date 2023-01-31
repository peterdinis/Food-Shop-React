import { FallBackLoader, Header } from '../shared';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api/queries/productQueries';
import { useNavigate, useParams, Link } from 'react-router-dom';
import FallbackRender from '../shared/FallbackRender';

const ProductInfo: React.FC = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery(['productInfo', id], () =>
    api.getOneProduct(id as any)
  );
  const navigate = useNavigate();

  const navigateBackToProducts = () => {
    navigate('/products');
  };

  if (isLoading) {
    return <FallBackLoader />;
  }

  if (isError) {
    return <FallbackRender error="Something went wrong" />;
  }

  return (
    <>
      <Header text="Product Info" />
      {data === undefined || null ? (
        <FallbackRender error="Something went wrong" />
      ) : (
        <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {data.image === null ||
              data.image === undefined ||
              !data.image ||
              data.image === 'string' ? (
                <LazyLoadImage
                  alt="No Image"
                  className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                  src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                />
              ) : (
                <LazyLoadImage
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                  src={data.image}
                />
              )}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  <span className="font-bold">Product name</span>: {data.name}
                </h1>
                <h3 className="text-gray-900 mt-8 text-3xl title-font font-medium mb-1">
                  <span className="font-bold">Product description</span>:{' '}
                  {data.description}
                </h3>

                <h3 className="text-gray-900 mt-8 text-3xl title-font font-medium mb-1">
                  <span className="font-bold">Product price</span>: {data.price}
                </h3>

                <button className="mt-10 bg-blue-100 rounded-lg text-xl font-bold p-1">
                  <Link to="/card">Add to card</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
