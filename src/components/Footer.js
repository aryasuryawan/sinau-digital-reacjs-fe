import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-100 py-8 sm:py-12 mt-12 px-6">
      <div className="container mx-auto">
        <div className="sm:flex sm:flex-wrap sm:mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Layanan</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Bootcamp</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">ProclassName</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Video Course</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Event & Workshop</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Hire Our Graduates</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Internship</Link></li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Tentang</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><Link to="about-us.html" className="border-b border-solid border-transparent">Tentang Kami</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Alumni</Link></li>
              <li className="mb-2"><Link to="karir.html" className="border-b border-solid border-transparent">Karir</Link></li>
              <li className="mb-2"><Link to="testimoni.html" className="border-b border-solid border-transparent">Testimoni</Link></li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">FAQ</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Kebijakan Kerahasiaan Data</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Ketentuan Layanan</Link></li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Komunitas</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Blog</Link></li>
              <li className="mb-2"><Link to="./" className="border-b border-solid border-transparent">Youtube</Link></li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Ikuti Media Sosial Kami</h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Link to="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                <i className="fab fa-facebook"></i></Link>
              <Link to="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                <i className="fab fa-twitter"></i></Link>
              <Link to="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                <i className="fab fa-google-plus-g"></i></Link>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t py-8">
          <div className="px-4">
            &copy; Kelompok 9 FSD Harisenin.com
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;