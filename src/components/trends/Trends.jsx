import SearchBar from "./SeachBar";
import mora2 from "./../../images/More-2.svg"
import Settings from "./../../images/Settings.svg"



function Trends() {

   return (
      <>
      <SearchBar />
      <div className="container-trends">
         <div className="lists-Trends">
            <h2> Trends for you </h2>
            <img src={Settings} alt="" />
         </div>

         <div className="list--Trends">
            <span>Trending in Turkey<img src={mora2} alt="" /></span>
            <h2> #SQUID </h2>
            <p>2,066 Tweets </p>
         </div>

         <div className="list--Trends">
            <span>Trending in Turkey<img src={mora2} alt="" /></span>
            <h2> #SQUID </h2>
            <p>2,066 Tweets </p>
         </div>

         <div className="list--Trends">
            <span>Trending in Turkey<img src={mora2} alt="" /></span>
            <h2> #SQUID </h2>
            <p>2,066 Tweets </p>
         </div>

         <div className="list--Trends">
            <span>Trending in Turkey<img src={mora2} alt="" /></span>
            <h2> #SQUID </h2>
            <p>2,066 Tweets </p>
         </div>


      </div>
  
      </>
   )
}
export default Trends;