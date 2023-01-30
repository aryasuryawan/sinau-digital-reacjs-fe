import { Link } from "react-router-dom";
import logosinau from '../assets/Logo-sinau-digital.webp';


function Header() {

  const clickButton = ()=> {
    let collapse=document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  }
  return (
    <div className="bg-white py-2 md:py-4 shadow-md">
    <div className="container px-6 mx-auto md:flex md:items-center">
      <div className="flex justify-between items-center text-2xl font-bold text-indigo-500">
        <Link to="/"><img src={logosinau}  alt="Logo" class="h-[40px]" /></Link>
        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle" 
        onClick={clickButton}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded">Home</Link>
         <Link to="/about" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-indigo-100 hover:text-gray-700 transition-colors duration-300 font-bold text-lg">About</Link>
         <Link to="/contact" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-indigo-100 hover:text-gray-700 transition-colors duration-300 font-bold text-lg">Contact</Link>
         
         <Link to="login" className="p-2 lg:px-4 md:mx-2 text-blue-600 text-center border border-solid border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Masuk</Link>
         <Link to="/daftar" className="p-2 lg:px-4 md:mx-2 text-white text-center bg-blue-600 border border-solid border-blue-800 rounded hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Daftar</Link>
       </div>
       </div>
  </div>

  );
 
}

export default Header;
