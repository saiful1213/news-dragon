import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews/LatestNews";
import News from "../../Component/news";

const Home = () => {
   const [allNews, setallNews] = useState([]);
   useEffect(() => {
      fetch('news.json')
         .then(res => res.json())
         .then(data => setallNews(data))
   }, [])
   return (
      <div>
         <Header></Header>
         <LatestNews></LatestNews>
         <Navbar></Navbar>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            <div>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-2">
               <h1 className="font-bold text-2xl mb-5">Dragon News Home {allNews.length}</h1>
               {
                  allNews.map((news, idx) => <News key={idx} news={news}></News>)
               }
            </div>
            <div>
               <div>
                  <RightSideNav></RightSideNav>
                  <div className="text-center bg-bgImg py-16 px-8 text-white">
                     <h1 className="text-3xl font-bold">Create an Amazing Newspaper</h1>
                     <p className="mt-5 mb-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                     <button className="btn capitalize bg-[#D72050] text-xl font-semibold text-white">Learn More</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;