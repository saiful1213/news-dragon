import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const LatestNews = () => {
   return (
      <div className="flex">
         <button className="bg-[#D72050] btn text-white">Latest</button>
         <Marquee speed={100} pauseOnHover={true}>
            <Link to="/">
               <p className="mr-24">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link>
               <p className="mr-24">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link>
               <p className="mr-24">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
         </Marquee>
      </div>
   );
};

export default LatestNews;