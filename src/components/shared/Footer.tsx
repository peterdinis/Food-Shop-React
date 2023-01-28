const Footer: React.FC = () => {
  return (
    <section className="bg-white mt-3">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <span className="text-3xl leading-6 text-gray-800 hover:text-gray-900">
              &copy;FoodReShop 2023
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
