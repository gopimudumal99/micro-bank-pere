import React,{useState} from "react";
import "./Dashboard.css";
import SummaryAccnt from "./SummaryAccnt";
import ServicesCurrent from "./ServicesCurrent";
import Navbar from "../Navbar/Navbar";
import Details from "./Details";
import Footer from "../Footer/Footer";
import {arr,current_services,available_services} from "../../Data/data"

const Dashboard:React.FC = () => {
  const [isSummary,setIsSummary] = useState<boolean>(true);

  const handleDetails = ()=> {
      setIsSummary(false)
  }

  const handleSummary = () =>{
    setIsSummary(true)
  }

  return (<>
    <Navbar/>
    <div className="dashboard">
      <h4>Dashboard</h4>
      <div className="summary_details">
        <div className={isSummary?"active":""} onClick={handleSummary} >Summarry</div>
        <div className={isSummary?"":"active"} onClick={handleDetails} >Details</div>
      </div>
      {/* summary */}
      {isSummary ?(<>
      <div className="summary_container">
        <div className="summary_box1">
          <h2>Summary</h2>
          <div className="sumary_acnt">
            {arr.map((obj) => {
              return <SummaryAccnt text1={obj.text1} text2={obj.text2} />;
            })}
          </div>
        </div>
      </div>
      {/* services */}
      <div className="services_container">
        <div className="service_text">
          <span>Services</span> Micro bank services for you
        </div>
        <div className="current_services">
          <h2>Curren Services</h2>
          <div className="services">
            {current_services.map((service,index) => {
              return (
                <ServicesCurrent key={index}
                  icon={service.icon}
                  text={service.text}
                  isStar={true}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="current_services">
        <h2>Available Services</h2>
        <div className="services">
            {available_services.map((service,index) => {
              return (
                <ServicesCurrent key={index}
                  icon={service.icon}
                  text={service.text}
                  isStar={false}
                />
              );
            })}
          </div>
      </div>
      </>):(<Details/>)}
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
