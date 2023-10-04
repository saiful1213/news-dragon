import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([])

   useEffect(()=>{
      fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
   },[])
   return (
      <div className="px-4 sticky top-8">
         <h1 className="mb-5 text-xl font-semibold">All Caterogy</h1>
         {
            categories.map(category => 
               <NavLink key={category.id} 
                  className="block mb-6" 
                  to={`/category/${category.id}`}>
                  {category.name}
               </NavLink>)
         }
      </div>
   );
};

export default LeftSideNav;