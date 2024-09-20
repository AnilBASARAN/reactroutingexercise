
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

const App = () => {
  return (<div>

 
    
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
      
    </BrowserRouter>
  </div>);
};

export default App;
