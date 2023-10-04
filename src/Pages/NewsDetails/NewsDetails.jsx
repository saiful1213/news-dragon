import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai"

const NewsDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState([]);

   useEffect(()=>{
      fetch('/news.json')
      .then(res => res.json())
      .then(data => setData(data))
   },[])

   const selectedCards = data.find(obj => obj._id === id);

   const {image_url, title, details} = selectedCards || {};

   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="grid md:grid-cols-4 gap-3">
            <div className="col-span-3 p-7">
               <h1 className="text-[#403F3F] font-semibold text-xl mb-12">Dragon News</h1>
               <img src={image_url} className=  "w-full"/>
               <h1 className="font-bold text-2xl text-[#403F3F] mt-5 mb-2">{title}</h1>
               <p className="text-[#706F6F]">{details}</p>
               <button className="bg-[#D72050] btn text-white mt-8"><AiOutlineArrowLeft size={'1.5rem'}/>All news in this category</button>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;