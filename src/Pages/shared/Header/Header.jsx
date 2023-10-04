import logo from "../../../assets/logo.png"
import moment from 'moment';


const Header = () => {
   return (
      <div className="text-center">
         <img src={logo} className="mx-auto"/>
         <p className="">Journalism Without Fear or Favour</p>
         <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
   );
};

export default Header;