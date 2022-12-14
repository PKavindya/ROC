import React from 'react'
import { Rotaract } from '../Components/Rotaract'
import { Link } from "react-router-dom";

import BagDonation from "../assests/BagDonation.jpg"

export const Home = () => {

const project =[{
  id:1,
  title:"Bag Donation",
  image:BagDonation,
  date:"Date:12-10-2019",
  discription:""
}];

  return (
<div className='home'>
  <div className='projects'>
    {project.map((project)=>(
     <div className='project' key={project.id}>
      <div className='img'>
        <img src={project.image} alt=""/>
        </div>
<div className='content'>
  <Link className="link" to={`/project/${project.id}`}>
    <h1>{project.title}</h1>
    <p>{project.date}</p>
    <p>{project.discription}</p>
    <button>Read</button>
  </Link>
</div>
</div>
    ))}
  </div>
</div>
  );
};
