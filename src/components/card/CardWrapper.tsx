import { CardInfo } from '.';
import { FallBackLoader } from '../shared';
import {Suspense} from "react";

const CardWrapper: React.FC = () => {
  return (
    <Suspense fallback={<FallBackLoader />}>
      <h3 className="text-center mt-10 text-4xl">Card</h3>
      <CardInfo />
    </Suspense>
  );
};

export default CardWrapper;
