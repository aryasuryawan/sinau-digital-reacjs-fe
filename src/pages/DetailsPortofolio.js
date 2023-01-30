// import { Axios } from "axios";
// import React, { Component, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import portofolio from '../portofolio.json';

// function DetailsPortofolio(){
//     const [portofolio, setPortofolio] = useState({name:{}});
//     const {id} = useParams();

//     const fetchDetails = () => {
//         fetch({portofolio}${id})
//         .then(res => res.json())
//         .then(data => setPortofolio(data))
//     };

//     useEffect(() => {
//         fetchDetails();
//     },[]);
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import portofolio from '../portofolio.json';

const getPostById = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/posts/${id}`);
    setPost(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

const DetailsPortofolio = ({ match, location }) => {
    const {
      params: { id }
    } = match;
  
    return (
      <>
        <p>
          <strong>User ID: </strong>
          {id}
        </p>
        <p>
          <strong>User Name: </strong>
          {portofolio[id - 1].title}
        </p>
      </>
    );
  };

  
export default DetailsPortofolio;