import "./investors.css"
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Investors = () => {
  return (
    <div className="investors-container">
      <h1 className="investors-title">Investors</h1>
      <div className="investor-cards-container">
        {/* Card 1 */}
        
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div class="profile-image">
        <div class="name">
         <h4 className="investor-name   ">SG Groups</h4>
        </div>
        <p className="fs-5 p-2"><FaLocationDot className="fs-4" />Vellore</p>
      </div>
    </div>
    <div class="flip-card-back">
      <div class="Description">
        <p class="description">
        SG groups offers a diversify services in vellore. Focusing on mankind solutions</p>
         <h5 className="chair"> Chair By</h5> 
       <p className="Gopi">Saranya Gopinath</p>
      </div>
     
    </div>
  </div>
</div>        
        {/* Card 2 */}
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div class="profile-image">
        <div class="name">
          <h4 className="investor-name">Sri Durgaiamman Constructions</h4>
        </div>
       <p className="fs-5"><FaLocationDot className="fs-4" />Kallakurichi</p>
      </div>
    </div>
    <div class="flip-card-back">
      <div class="Description">
        <p class="description">
       Construction solutions offers a diversify services in tamilnadu. Focusing on mankind solutions        </p>
        <h5 className="chair"> Chair By</h5> 
       <p className="Gopi">Kathiravan Arumugam</p>
      </div>
    </div>
  </div>
</div>
        
        

       

          
            
        

       
      
      </div>
    </div>
  );
};

export default Investors;
