import SearchBar from "./SeachBar";

function Trends() {

   return (
      <>
      <SearchBar />
   <div className="container-trends">
      <div className="trend">
         <h3>#SQUID</h3>
         <p>2,066 Tweets</p>
     </div>
      <div className="trend">
         <h3>#TheBatman</h3>
         <p>1,567 Tweets</p>
      </div>
      <div className="trend">
         <h3>#EldenRing</h3>
         <p>1,234 Tweets</p>
      </div>
</div>
      </>
   )
}
export default Trends;