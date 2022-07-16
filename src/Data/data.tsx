import bank from "../assets/bank.png";
import payroll from "../assets/payroll.png";
import paymentIcon from "../assets/payment.png";
import walletIcon from "../assets/wallet.png";
import investmentIcon from "../assets/investment.png";
import taxPayIcon from "../assets/taxPayment.png";

interface arrInt {
  text1: string;
  text2: string;
}

interface ServiceIconArr {
  icon: any;
  text: string;
}

interface detailsItemArr {
  id: number;
  date: string;
  amount: string;
  status: "Approved" | "Rejected";
}

export const arr: arrInt[] = [
  { text1: "Account Number", text2: "67238744" },
  { text1: "Income", text2: "$20,00,000" },
  { text1: "Spends", text2: "$11,00,000" },
];

export const current_services: ServiceIconArr[] = [
  { icon: bank, text: "Current Account" },
  { icon: payroll, text: "Payroll" },
  { icon: paymentIcon, text: "Payment" },
];

export const available_services: ServiceIconArr[] = [
  { icon: walletIcon, text: "Wallet" },
  { icon: investmentIcon, text: "Investments" },
  { icon: taxPayIcon, text: "Tax Payment" },
  { icon: paymentIcon, text: "Loan" },
];

export const detailsArr: detailsItemArr[] = [
  { id: 2011002039111, date: "22-09-2021", amount: "1780", status: "Approved" },
  { id: 2011002039112, date: "19-09-2021", amount: "1890", status: "Approved" },
  { id: 2011002039113, date: "20-08-2021", amount: "5500", status: "Rejected" },
  { id: 2011002039114, date: "12-07-2021", amount: "2590", status: "Approved" },
  { id: 2011002039113, date: "08-07-2021", amount: "2800", status: "Rejected" },
];
