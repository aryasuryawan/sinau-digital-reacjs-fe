import React, { Component } from 'react';  
import { Link } from "react-router-dom";
import product from '../portofolio.json';

class ProductGrids extends Component {

    render(){
        return(
            <div className="container mx-auto my-3 py-14 px-6 ">
                <div className="py-7">
                    <h2 className="font-bold text-4xl mb-3 text-center">Pelatihan dan Bootcamp Favorit Netizen </h2>
                    <p className="text-md text-slate-500 text-center">Belajar intensif dengan career coaching dan job-guarantee, hanya dalam 3-6 bulan</p>
                </div>
                <Boxproduct arrydata={product} />
            </div>
        )
    }
}



var Boxproduct = function (props) {  
    // get data dari array 
    
    var product = props.arrydata.map(function (data) {  
      return (
        <div className="text-md border-2 border-gray-200  rounded-md items-center align-middle center-center pb-6" key={data.id}>
             <div className="mb-6">
                <img src={(data.image)} className="rounded-md" alt="produk" /></div>
             <div className="font-bold text-xl px-4 my-2 ">
                <Link to={`/product/${data.id}`}>{data.title}</Link>
            </div>
        </div>
      )
   });  
//    console.log(product);
    return (  
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product} 
        </div> 
        
    );  
  }  

  
 export default ProductGrids; 