/* import { PaymentModal } from '../payments';
import { useCardValue } from '../../context/CardContext';
import ScrollToTop from '../../hooks/useScroll';

const CardInfo: React.FC = () => {
  const [{ basket }, dispatch] = useCardValue() as any;
  return (
    <>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="text-left pt-3">Image</th>
                  <th className="text-left">Products</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {basket &&
                  basket.map((item: any) => {
                    return (
                      <>
                        <tr>
                          <td className="hidden pb-4 md:table-cell">
                            <a href="#">
                              <img
                                src={item.image}
                                className="w-20 rounded"
                                alt="Thumbnail"
                              />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <p className="mb-2 md:ml-4">{item.name}</p>
                              <form action="" method="POST">
                                <button
                                  type="submit"
                                  className="text-gray-700 md:ml-4"
                                >
                                  <small>(Remove item)</small>
                                </button>
                              </form>
                            </a>
                          </td>
                          <td className="justify-center md:justify-end md:flex mt-6">
                            <div className="w-20 h-10">
                              <div className="relative flex flex-row w-full h-8">
                                <input
                                  type="number"
                                  value={1}
                                  className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="hidden text-right md:table-cell">
                            <span className="text-sm lg:text-base font-medium">
                              {item.price}
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="mt-6 text-center">
              <PaymentModal />
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default CardInfo;
 */

import React from 'react'

function CardInfo() {
  return (
    <div>CardInfo</div>
  )
}

export default CardInfo