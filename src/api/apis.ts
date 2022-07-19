import axios from "axios";
import { UserData, UserCredential } from "../Data/dataTypes";

export const postData = async (data: UserData) => {
  const user = Object.assign(data, {
    rating: { current_account: 0, payroll: 0, payment: 0 },
  });
  try {
    await axios.post("http://localhost:3001/users", user);
    alert("create account successfully");
  } catch (err) {
    console.log(err);
  }
};

// feacth data by ID
export const getUserByID = async () => {
  let res = await axios.get(`http://localhost:3001/users/${2}`);
  let data = res.data;
  console.log(data);
};

export const getUserByLogin = async (data: UserCredential) => {
  let res = await axios.get("http://localhost:3001/users");
  let users = res.data;
  let user = users.filter(
    (user: any) =>
      user.email === data.email_phone && user.password === data.password
  );
  return user;
};

interface Rating {
  current_account: number;
  payroll: number;
  payment: number;
}

export const updateRating = async (state: Rating, id: string) => {
  await axios.patch(`http://localhost:3001/users/${id}`, {
    rating: {
      current_account: state.current_account,
      payroll: state.payroll,
      payment: state.payment,
    },
  });
};
