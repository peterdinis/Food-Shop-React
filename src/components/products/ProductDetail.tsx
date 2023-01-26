import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/products");
  };

  return (
    <>
      <h3 className="text-center mt-10 text-4xl">Detail</h3>
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <LazyLoadImage
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
              src="https://picsum.photos/200/300"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Názov</span>: FOO
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Krátke info</span>: iiiii
              </p>
              <button className="mt-4 pl-2 bg-blue-100 p-2 rounded-lg font-bold">Add to Card</button>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5" />
              <button className="mt-10 text-xl" onClick={navigateBack}>
                Go to menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
