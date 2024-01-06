
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        </div>
        <p className="">
          "Transform chaos into productivity. Unleash the power of organization with our sleek todo app. Your tasks, your way—effortless, efficient, extraordinary."
        </p>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}ToDo
          . Made with ❤️ using NextJS by <span className="font-semibold">
            <a target="_blank" href="https://github.com/utkarsh-gupta17">
            @UtkarshGupta
            </a>
            </span>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
