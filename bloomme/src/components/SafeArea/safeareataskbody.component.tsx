import React, { useState } from "react";
import EmergencyModal from "./EmergencyModal.component";
import "../../styles/SafeArea/safeareabody.style.css";
import "../../styles/SafeArea/safeareatask.style.css";
import { Link } from "react-router-dom";
import sadbunny from "../../assets/safearea/sadbunny.png";

const SafeAreaTaskBody: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleEmergencyClick = () => {
    setShowModal(true);
    console.log("Emergency button clicked, showModal is:", showModal);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="safehome-container">
      {/* <div className="safehome-divider">
        <img src={safearealine} alt="Divider" />
      </div>  */}
      <div className="safehome-left">
        <img src={sadbunny} alt="Sad Bunny" />
      </div>
      <div className="safehome-right">
        <h2 className="safehome-question">
          Everything will be fine, I will always be here for you.
        </h2>
        <div className="safehome-message-box">
          <p className="safehome-message">
            /* Aquí irá el mensaje de la IA */ "Te recomiendo realizar un
            ejercicio de respiración profunda para calmar tus nervios."
          </p>
        </div>
        <div className="safehometask-categories">
          <button
            className="safehometask-category-btn"
            style={{ backgroundColor: "#9dc994", color: "#ffffff" }}
          >
            How are you feeling?
          </button>
          <div className="safehometask-category-row">
            <Link
              to="/safearea"
              className="safehometask-category-btn"
              style={{ backgroundColor: "#f1db93", color: "#ffffff" }}
            >
              Select another emotion
            </Link>
            <Link
              to="/safearea/:exercises"
              className="safehometask-category-btn"
              style={{ backgroundColor: "#ffa97b", color: "#ffffff" }}
            >
              Choose another exercise
            </Link>
          </div>
        </div>
      </div>
      <button className="safehome-emergency-btn" onClick={handleEmergencyClick}>
        Emergency Button
      </button>
      {showModal && <EmergencyModal onClose={handleCloseModal} />}
    </div>
  );
};

export default SafeAreaTaskBody;
