import React, { useState } from "react";
import "./HomePage.scss";

import CreateAccount from "../../components/create-account/CreateAccount";
import CreateHospital from "../../components/create-hospital/CreateHospital";
import CreatePatient from "../../components/create-patient/CreatePatient";
import CreateTransaction from "../../components/create-transactions/CreateTransaction";
import DummyAccounts from "../../components/dummy-accounts/DummyAccounts";

const HomePage = () => {
  const [menu, setMenu] = useState("ca");

  const Menu = () => {
    if (menu === "ca") {
      return <CreateAccount />;
    } else if (menu === "ct") {
      return <CreateTransaction />;
    } else if (menu === "da") {
      return <DummyAccounts />;
    } else if (menu === "cp") {
      return <CreatePatient />;
    } else if (menu === "ch") {
      return <CreateHospital />;
    }
  };

  return (
    <div className="homePage">
      <div className="homePage__container">
        <div className="topButtons">
          <div className="topButton" onClick={(e) => setMenu("ca")}>
            Create Insurance
          </div>
          <div className="topButton" onClick={(e) => setMenu("ch")}>
            Create Hospital
          </div>
          <div className="topButton" onClick={(e) => setMenu("cp")}>
            Create Patient
          </div>
          <div className="topButton" onClick={(e) => setMenu("ct")}>
            Create Transaction
          </div>
          <div className="topButton" onClick={(e) => setMenu("da")}>
            All Accounts
          </div>
        </div>
        <div className="bottom">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
