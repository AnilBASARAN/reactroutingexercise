import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRightFromBracket ,faHouse} from '@fortawesome/free-solid-svg-icons';

const NavBar =()=>{

  const location = useLocation();
  console.log(location);
  
  return(

    <div className="flex justify-center px-2" >

      <div className="w-full max-w-5xl bg-amber-50 p-8 flex justify-between items-center" >
    <Link to="/" ><img alt="" className="w-32" src="https://static-task-assets.react-formula.com/102167.png" /></Link>
      
    <div className="text-amber-500">
      
    <Link to="/" className={clsx("mr-2",location.pathname === "/" &&"text-amber-800" )}><FontAwesomeIcon icon={faHouse} />Home</Link>
   <Link className={clsx("mr-2",location.pathname === "/about" &&"text-amber-800" )} to="/about"><FontAwesomeIcon icon={faComment} />About</Link>
   <Link className={clsx("mr-2",location.pathname === "/sign-in" &&"text-amber-800" )} to="/sign-in"><FontAwesomeIcon icon={faRightFromBracket} />Sign-in</Link>
    </div>
      
    </div>
      
    </div>
  );
};

export default NavBar;