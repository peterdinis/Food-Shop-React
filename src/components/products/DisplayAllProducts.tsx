import ScrollToTop from "../../hooks/useScroll";
import { Header } from "../shared";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/init";
import { useEffect, useState } from "react";
import { IProduct } from "../../typings/productTypings";

const DisplayAllProducts: React.FC = () => {
  const [products, setProduts] = useState([]);
  const productsCollectionRef = collection(firestore, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProduts(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any
      );
    };

    getProducts();
  }, []);

  console.log(products);

  return (
    <>
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
                        className="hover:grow hover:shadow-lg"
                        src={item.image}
                      />
                      <div className="pt-3 flex items-center justify-between">
                        <p>{item.name}</p>
                        <button>
                          <a>Add to Card</a>
                        </button>
                      </div>
                      <p className="pt-1 text-gray-900">{item.price}</p>
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
