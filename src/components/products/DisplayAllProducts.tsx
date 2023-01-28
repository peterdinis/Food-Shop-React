import ScrollToTop from "../../hooks/useScroll";
import { FallBackLoader, Header } from "../shared";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/init";
import { useEffect, useState, Suspense } from "react";
import { IProduct } from "../../typings/productTypings";
import { useCardValue } from "../../context/CardContext";
import { ADD_TO_BASKET } from "../../typings/constants";
import useImageOnLoad from "../../hooks/useImageLoad";
import { style } from "./style";
import { toast } from "react-toastify";

const DisplayAllProducts: React.FC = () => {
  const [products, setProduts] = useState([]);
  const productsCollectionRef = collection(firestore, "products");
  const [state, dispatch] = useCardValue() as any;
  const { handleImageOnLoad } = useImageOnLoad();

  const notify = () => toast.success("New item was add to card!");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProduts(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any
      );
    };

    getProducts();
  }, []);

  return (
    <Suspense fallback={<FallBackLoader />}>
      <Header text="All Foods" />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {products &&
            products.map((item: IProduct) => {
              return (
                <>
                  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <span>
                      <img
                        style={{ ...style.image }}
                        className="hover:grow hover:shadow-lg"
                        src={item.image}
                        onLoad={handleImageOnLoad}
                      />
                      <div className="pt-3 flex items-center justify-between">
                        <p className="font-bold">{item.name}</p>
                        <button
                          className="bg-blue-100 rounded-lg font-bold p-1"
                          onClick={() => {
                            notify();
                            dispatch({
                              type: ADD_TO_BASKET,
                              item: {
                                id: item.id,
                                name: item.name,
                                image: item.image,
                                price: item.price,
                              },
                            });
                          }}
                        >
                          Add to Card
                        </button>
                      </div>
                      <p className="pt-1 text-gray-900 font-bold">
                        {item.price}€
                      </p>
                    </span>
                  </div>
                </>
              );
            })}
        </div>
      </section>
      <ScrollToTop />
    </Suspense>
  );
};

export default DisplayAllProducts;
