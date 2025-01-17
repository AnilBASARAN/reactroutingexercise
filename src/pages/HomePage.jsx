import NavBar from "../shared/NavBar.jsx";


const HomePage = () => {
  return (

    <>
    <NavBar />  
      <div className="flex font-open items-start justify-center min-h-screen bg-amber-50">
        <div className="flex flex-wrap items-center justify-center w-full max-w-5xl px-6 pt-24">
          <div className="my-20">
            <h1 className="font-bubble text-6xl text-red-700 mb-4 max-w-[320px]">
              Cat Sitters You Can Trust
            </h1>
            <div className="max-w-sm text-xl leading-relaxed text-amber-600">
              Friendly cat lovers to watch over your feline friend while you are
              away
            </div>
            <button className="px-20 py-3 my-8 text-xl font-medium text-white bg-green-800 rounded-full">
              Sign In
            </button>
          </div>
          <img
          alt=""
            className="w-[420px] mx-4"
            src="https://static-task-assets.react-formula.com/331441.png"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
