import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div>
         <h1>!Oops something is wrong</h1>
         <Link to={-1}><button className="btn btn-error">Go Back</button></Link>
      </div>
   );
};

export default Error;