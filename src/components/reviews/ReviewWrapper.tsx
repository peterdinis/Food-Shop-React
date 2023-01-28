import ReviewBody from './ReviewBody';
import ReviewHeader from './ReviewHeader';

const ReviewWrapper: React.FC = () => {
  return (
    <>
      <ReviewHeader text="What customers say?" />
      <ReviewBody />
    </>
  );
};

export default ReviewWrapper;
