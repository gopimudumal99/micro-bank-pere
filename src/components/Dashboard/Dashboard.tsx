import React from "react";
import "./Dashboard.css";
import SummaryAccnt from "./SummaryAccnt";
import bank from "../../assets/bank.png";
import payroll from "../../assets/payroll.png";
import paymentIcon from "../../assets/payment.png";
import ServicesCurrent from "./ServicesCurrent";

import walletIcon from "../../assets/wallet.png";
import investmentIcon from "../../assets/investment.png";
import taxPayIcon from "../../assets/taxPayment.png";
import Details from "./Details";

const Dashboard = () => {
  let isSummary = false;
  interface arrInt {
    text1: string;
    text2: string;
  }

  interface ServiceIconArr {
    icon: any;
    text: string;
  }

  let arr: arrInt[] = [
    { text1: "Account Number", text2: "67238744" },
    { text1: "Income", text2: "$20,00,000" },
    { text1: "Spends", text2: "$11,00,000" },
  ];

  let current_services: ServiceIconArr[] = [
    { icon: bank, text: "Current Account" },
    { icon: payroll, text: "Payroll" },
    { icon: paymentIcon, text: "Payment" },
  ];

  let available_services: ServiceIconArr[] = [
    { icon: walletIcon, text: "Wallet" },
    { icon: investmentIcon, text: "Investments" },
    { icon: taxPayIcon, text: "Tax Payment" },
    { icon: paymentIcon, text: "Loan" },
  ];

  return (
    <div className="dashboard">
      <h4>Dashboard</h4>
      <div className="summary_details">
        <div className="active">Summarry</div>
        <div>Details</div>
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
            {current_services.map((service) => {
              return (
                <ServicesCurrent
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
            {available_services.map((service) => {
              return (
                <ServicesCurrent
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
  );
};

export default Dashboard;
