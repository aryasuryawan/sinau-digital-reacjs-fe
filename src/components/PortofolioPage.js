import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';
import portofolio from '../portofolio.json';

const PortofolioPage = () => {
  // Hidden for simplicity
  return (
    <article>
      <div className='container mx-auto px-6'>
      <h2>Portofolio</h2>
      {portofolio.map((data) => (
        <div key={data.id}>
          
             <h2>{data.title}</h2>
          </div>
           
          
        
      ))}
      </div>
    </article>
  );
};

export default PortofolioPage;