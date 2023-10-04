import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
   const { id } = useParams();
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="grid md:grid-cols-4">
            <div className="col-span-3">
               <h1>News Details of {id}</h1>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;