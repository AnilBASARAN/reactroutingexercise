import {Link} from "react-router-dom";

const SignInPage = () => {
  return (
    <>
     
      <div className="font-open flex flex-col items-center justify-center min-h-screen bg-amber-50">
        <div className="flex flex-col items-center">
         <Link to="/">
             <img
             alt=""
            className="w-32"
            src="https://static-task-assets.react-formula.com/102167.png"
          />
         </Link>
      
          <div className="font-bubble mt-2 text-3xl text-green-800">
            Carl's Cat Sitters
          </div>
        </div>
        <form
          className="flex flex-col m-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder-amber-900/40 text-amber-800"
            placeholder="username"
          />
          <input
            className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder-amber-900/40 text-amber-800"
            placeholder="password"
            type="password"
          />
        </form>
      </div>
    </>
  );
};

export default SignInPage;
