import React from 'react'
import { Link } from "react-router-dom";
import imgHeader from '../assets/header.f0a86a2.png';

function Hero() {
  return (
    <div className="bg-slate-100 pt-8 md:pb-0">
    <div className="container  px-6 mx-auto">       
      <div className="box-border flex flex-wrap  items-center justify-between">
        <div className="w-full md:w-2/5 bg-slate-100 "> 
          <h1 className="text-3xl font-bold text-black-700 mb-4">Raih Karir Impianmu, Walau
            <span id="theText"></span></ h1>
          <p className="text-base">Kuasai skill dan dapatkan pekerjaan impianmu. Sudah 3385 alumni berhasil meraih karir impian mereka. Apabila setelah lulus kamu belum bekerja dalam 365 hari, kamu berhak mendapatkan refund up to 110% dari investasimu. Kuasai skill dan dapatkan pekerjaan impianmu.</p>
          <button className="bg-blue-500 text-white font-bold text-sm py-2 px-4 my-8 rounded hover:bg-blue-700" ><Link to="/">Temukan Bootcamp Yang Tepat</Link></button>
          <div className="flex">
            <div className="flex-none"><img className="rounded-full w-12" alt="bootcamp" src={require('../assets/testi-img-1.webp')}  /></div>
            <div className="flex-none -ml-3"><img className="rounded-full w-12" alt="bootcamp"  src={require('../assets/testi-img-2.webp')} /></div>
            <div className="flex-none -ml-3"><img className="rounded-full w-12" alt="bootcamp" src={require('../assets/testi-img-3.webp')} /></div>
            <div className="p-3">
              <div>
                <span className="fa fa-star text-yellow-500"></span>
                <span className="fa fa-star text-yellow-500"></span>
                <span className="fa fa-star text-yellow-500"></span>
                <span className="fa fa-star text-yellow-500"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="text-xs" >(4.9/5 dari 3386 Alumni)</div>
            </div>
          </div>
        </div> 
        <div className="w-full md:w-3/5 bg-slate-100 py-6"> 
          <img alt="bootcamp"  src={imgHeader}  />
        </div> 
      </div>
    </div>
  </div>

);
}

export default Hero;
  
