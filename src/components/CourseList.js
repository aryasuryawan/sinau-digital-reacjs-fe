import React, { useState, useEffect } from 'react';  
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link, useParams } from "react-router-dom";

function CourseGrid() {
    // const url = 'https://api.github.com/users'
    const params = useParams();
    const id = params?.id;
    const url = 'http://localhost:5000/course/'
    const [products, setProducts] = useState([])
  
    const getDataProducts = async () => {
      const response = await fetch(url)
      const dataku = await response.json()
      const products = dataku
      setProducts(products)
    }
  
    useEffect(() => {getDataProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(products)
    return (
        <div className="container mx-auto my-3 py-14 px-6 ">
          <div className="py-7">
              <h2 className="font-bold text-4xl mb-3 text-center">Pelatihan dan Bootcamp Favorit Netizen </h2>
              <p className="text-md text-slate-500 text-center">Belajar intensif dengan career coaching dan job-guarantee, hanya dalam 3-6 bulan</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
                return (
                    <div className="text-md border border-gray-200  rounded-md items-center align-middle center-center pb-6" key={product.id}>
                        <div className="mb-6 text-md border-b bg-slate-100 border-gray-200 ">
                            <Link to={`/training/${product.id}`}>
                              <img src={(product.image)} className="rounded-md max-w-full" alt={product.title} />
                              </Link>
                        </div>
                        <div className="text-md leading-5 px-4 my-2 ">
                            <Link to={`/training/${product.id}`}>{product.title}</Link>
                        </div>
                        <div className="text-md leading-5 px-4 my-2 ">
                            <span className="text-sm text-white bg-blue-500 p-1 rounded">{product.category}</span>
                        </div>
                        {/* <div className="rating rating-sm px-4 my-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <span className="text-sm text-blue-500 mb-4">&nbsp;<strong>({product.rating.rate}/5) </strong><i>dari&nbsp;{product.rating.count} Alumni</i></span>
                        </div> */}
                        <div className="flex mb-1.5 justify-between px-4">
                        {/* <div className="flex-none">
                          <span className="text-sm text-white font-bold bg-red-600 p-1 rounded-md">50%</span>
                          <span className="text-md text-slate-400 font-bold mb-4 line-through">Rp. 6.000.000</span>
                        </div> */}
                        <div className="flex-nowrap">
                          <span className="font-bold text-md mb-4"><FormatRupiah value={product.price}/></span>
                        </div>
                    </div>
                  </div>
                )}
              )
            }
          </div>
        </div>
      );
    }  
  
  
  export default CourseGrid;