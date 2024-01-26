import React, { useState } from "react";
import "./Form.scss";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const Form = ({ isCreateTransaction }) => {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState(
    "---Transaction Type---"
  );
  const [branch, setBranch] = useState("branch");
  const [transactionFormVal, setTransactionFormVal] = useState({});
  const [userFormVal, setUserFormVal] = useState({});
  const [nominiFormVal, setNominiFormVal] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ ...userFormVal, nomini: nominiFormVal });
    const res = await axios.post("/users", {
      ...userFormVal,
      nomini: nominiFormVal,
    });

    alert("Account has been created successfully");
    console.log(res);
  };

  const handleUserFormValChange = (e) => {
    const { name, value } = e.target;

    setUserFormVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNominiFormValChange = (e) => {
    const { name, value } = e.target;

    setNominiFormVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTransactionValChange = (e) => {
    const { name, value } = e.target;

    setTransactionFormVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateTransaction = (e) => {
    e.preventDefault();
    // console.log(transactionFormVal);
    transactionFormVal.branch = branch;
    transactionFormVal.transactionType = transactionType;
    navigate(`/transaction/${transactionFormVal.acc}`, {
      state: transactionFormVal,
    });

    console.log("transaction created");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        
          <div className="inputContainer">
            <input
              name="firstName"
              type="text"
              placeholder="Enter Insurance name"
              onChange={handleUserFormValChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Enter Admin name"
              onChange={handleUserFormValChange}
            />
            <input
              name="NID"
              type="text"
              placeholder="Enter Admin NID no"
              onChange={handleUserFormValChange}
            />
            <input
              name="mobile"
              type="text"
              placeholder="Enter mobile"
              onChange={handleUserFormValChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleUserFormValChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleUserFormValChange}
            />
            <input
              name="presentAddress"
              type="text"
              placeholder="Enter address"
              onChange={handleUserFormValChange}
            />
            <input
              name="permanentAddress"
              type="text"
              placeholder="TIN Number"
              onChange={handleUserFormValChange}
            />
            {/* nomini */}
            <input
              name="firstName"
              type="text"
              placeholder="Buisness Registration Num"
              onChange={handleNominiFormValChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Enter Number of Branch"
              onChange={handleNominiFormValChange}
            />
            {/* <input
              name="NID"
              type="text"
              placeholder="Enter nomini NID no"
              onChange={handleNominiFormValChange}
            />
            <input
              name="mobile"
              type="text"
              placeholder="Enter nomini mobile"
              onChange={handleNominiFormValChange}
            />
            <input
              name="relationship"
              type="text"
              placeholder="Enter relationship with nomini"
              onChange={handleNominiFormValChange}
            /> */}
          </div>

        <div className="buttonContainer">
          <button type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
