import SearchBar from "./SeachBar";
import TrendsOptions from "./TrendsOption";
import mora2 from "./../../images/More-2.svg"
import vecto from "./../../images/Vector.svg"



function Trends() {

   return (
      <>
      <SearchBar />
      <div>
         <div>
            <h2> Trends for you </h2>
            <img src={vecto} alt="" />
         </div>


      </div>
  
      </>
   )
}
export default Trends;