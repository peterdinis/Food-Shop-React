interface IReviewHeaderProps {
    text: string;
}

const ReviewHeader: React.FC<IReviewHeaderProps> = ({text}: IReviewHeaderProps) => {
  return (
    <>
      <nav className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <span className="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
            {text}
          </span>
        </div>
      </nav>
    </>
  );
};

export default ReviewHeader;
