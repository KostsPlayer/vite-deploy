import React, { useEffect } from "react";
import Cursor from "../../component/Helper/Cursor";
import { useNavigate, useLocation } from "react-router-dom";
import { allMessage } from "../../component/Helper/LogicServer";
import { ToastContainer } from "react-toastify";
import axios from "axios";

export default function Roles() {
  const { toastMessage, message } = allMessage();
  const location = useLocation();
  const redirect = useNavigate();

  const userIdFromRegistration = location.state?.userId;

  useEffect(() => {
    const registrationMessage = localStorage.getItem("registrationMessage");

    if (registrationMessage) {
      toastMessage("success", registrationMessage);
      localStorage.removeItem("registrationMessage");
    }
  }, [location.state]);

  const handleRoleSelection = (role) => {
    axios
      .post("http://localhost:5001/assign-role", {
        userId: userIdFromRegistration,
        role: role,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "roleMessagge",
          `Welcome to become a ${res.data.getRole}`
        );
        const userId = res.data.userId;
        redirect("/login", { state: { userId: userId } });
      })
      .catch((error) => {
        toastMessage("error", error);
        console.error(error);
      });
  };

  return (
    <>
      <Cursor />
      <div className="roles">
        <div className="roles-container-seller">
          <div className="seller" onClick={() => handleRoleSelection("seller")}>
            <span className="material-symbols-outlined">add_business</span>
            <span className="roles-text">Seller</span>
          </div>
          <div className="swap"></div>
        </div>
        <div className="roles-container-buyer">
          <div className="buyer" onClick={() => handleRoleSelection("buyer")}>
            <span className="material-symbols-outlined">add_shopping_cart</span>
            <span className="roles-text">Buyer</span>
          </div>
          <div className="swap"></div>
        </div>
      </div>
      {message && <ToastContainer />}
    </>
  );
}
