import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// import { FormatRupiah } from "@arismun/format-rupiah";

// const CourseSingle = () => {
//   const params = useParams();
//   const id = params?.id;

//   const [courses, setCourse] = useState({});

//   const getCourseById = async () => {
//     try {
//       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       setCourse(response.data);
//       // const response = await axios.get(`http://localhost:5000/course/${id}`);
//       // setCourse(JSON.stringify(response.data));
      
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
const CourseSingle = () => {
  const params = useParams();
  const id = params?.id;

  const [courses, setCourse] = useState({});

  const getCourseById = async () => {
    
      const response = await fetch(`http://localhost:5000/course/${id}`);
      const dataku = await response.json()
      const courses = dataku
      setCourse(courses)
    }


console.log(courses);
  useEffect(() => {
    getCourseById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 
    return (
      <>
       <div className="bg-slate-100 pt-6 pb-4">
          <div className="container px-6 mx-auto">       
            <div className="box-border flex flex-wrap">
              <div className="w-full mb-6 md:w-2/6 bg-slate-100 "> 
                <div className="rounded-sm ">&nbsp;
                  <img src={courses.image} alt={courses.title} className="rounded-xl w-100 w-100" />
                </div>
              </div> 
              <div className="w-full md:w-4/6 pl-8 pr-2 align-middle my-6"> 
                <h1 className="text-3xl font-bold text-blue-700 "> {courses.title}</h1>
                <div className="badge badge-secondary font-bold text-sm p-4 my-5 ">{courses.category}</div>
                <div className="">
                  <span className="fa fa-star text-yellow-500"></span>
                  <span className="fa fa-star text-yellow-500"></span>
                  <span className="fa fa-star text-yellow-500"></span>
                  <span className="fa fa-star text-yellow-500"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="bg-white sm:pt-8 lg:pt-4 pb-20">
          <div className="container px-6 mx-auto">       
            <div className="box-border flex flex-wrap">
                <div className="w-full md:w-4/6">
                  {/* detail kelas */}
                  <div className=" bg-slate-100 rounded-lg border-slate-500 p-6 mr-6 my-8">
                          <h2 className="text-2xl font-bold pb-6">Detail Kelas</h2>
                          <p className="text-base pb-6">{courses.description}</p>
                      </div>
                        {/* Instruktur Kelas */}
                        <div className=" bg-slate-100 rounded-lg border-slate-500 p-6 mr-6">
                          <h2 className="text-2xl font-bold pb-6">Instruktur</h2>
                          <p className="text-base pb-6">{courses.title}</p>
                      </div>
                </div>

                {/* sidebar */}
                <div className="my-8 w-full h-full md:w-2/6 bg-slate-100 rounded-lg border-slate-700 p-6">
                      <p className="text-2xl font-bold pb-2 mb-2">Investasi Kamu</p>
                      {/* <span className="text-xl text-red-700 font-bold line-through animate-pulse">Rp. 5.000.000,-</span> */}
                      <span className="text-2xl text-blue-700 font-bold pb-2 mb-2">Rp. {courses.price}</span>
                      <div className="text-base pb-6 mt-6"><strong>Kelas sudah termasuk :</strong>
                        <ul>
                          <li>Akses Semua Materi dalam kelas ini</li>
                          <li>Akses Kuis dan Ujian kelas</li>
                          <li>Mentor Pengalaman</li>
                          <li>Group Diskusi Kelas</li>
                          <li>E-Sertifikat</li>
                        </ul>
                        <button className="bg-blue-500 text-lg text-white font-bold py-2 px-4 my-8 rounded hover:bg-blue-700" ><Link to="/">Daftar Sekarang</Link></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
export default CourseSingle