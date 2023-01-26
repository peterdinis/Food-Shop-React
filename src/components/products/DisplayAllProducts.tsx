import ScrollToTop from "../../hooks/useScroll";
import { Header } from "../shared";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../../firebase/init";
import { useEffect, useState } from "react";

const DisplayAllProducts: React.FC = () => {
  const [ids, setIds] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = query(collection(firestore, "products"));
      onSnapshot(data, (querySnapshot) => {
        const databaseInfo = [];
        const dataIds = [];
        querySnapshot.forEach((doc) => {
          databaseInfo.push(doc.data().testData);
          dataIds.push(doc.id);
        });
      });
    };
    getData();
  }, []);

  console.log(info);

  return (
    <>
      <Header text="All Foods" />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>
                  <a href="/product/1">Detail</a>
                </button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>

          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>

          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>

          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>

          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <span>
              <img
                className="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>
                <button>Detail</button>
              </div>
              <p className="pt-1 text-gray-900">£9.99</p>
            </span>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DisplayAllProducts;
