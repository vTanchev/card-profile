import React, { useState, useEffect } from "react";

import useInput from "../hooks/use-input";
import CardContainer from "../UI/CardContainer";

import Avatar from "../UI/Avatar";
import koala from "../assets/koala1.png";
import { GoLocation } from "react-icons/go";
import { FaRegEdit, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import classes from "./ProfileCard.module.css";

const ProfileCard = () => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    value: enteredName,
    setEnteredValue: setEnteredName,
    enteredValueOnChange: enteredFirstNameOnChange,
  } = useInput("First Name");

  const {
    value: enteredLastName,
    setEnteredValue: setEnteredLastName,
    enteredValueOnChange: enteredLastNameOnChange,
  } = useInput("Last Name");

  const {
    value: enteredOffice,
    setEnteredValue: setEnteredOffice,
    enteredValueOnChange: enteredOfficeOnChange,
  } = useInput("Office location");

  const editHandlcer = () => {
    setIsEdit((prevState) => !prevState);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedOfficeLocation = localStorage.getItem("officeLocation");

    if (storedName) {
      setEnteredName(storedName);
    }
    if (storedLastName) {
      setEnteredLastName(storedLastName);
    }
    if (storedOfficeLocation) {
      setEnteredOffice(storedOfficeLocation);
    }
  }, []);

  const cancelEditedHandler = () => {
    setIsEdit(false);
  };

  const saveEditedHandler = () => {
    setIsEdit(false);
    localStorage.setItem("firstName", enteredName);
    localStorage.setItem("lastName", enteredLastName);
    localStorage.setItem("officeLocation", enteredOffice);
  };

  return (
    <CardContainer>
      <FaRegEdit
        onClick={editHandlcer}
        size={30}
        className={classes["edit-icon"]}
      />
      <Avatar src={koala} />

      <div className={classes["profile-info"]}>
        {isEdit ? (
          <>
            <div className={classes["input-container"]}>
              <input
                value={enteredName}
                onChange={enteredFirstNameOnChange}
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className={classes["input-container"]}>
              <input
                value={enteredLastName}
                onChange={enteredLastNameOnChange}
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className={classes["input-container"]}>
              <input
                value={enteredOffice}
                onChange={enteredOfficeOnChange}
                type="text"
                placeholder="Enter your office location"
              />
            </div>
            <div className={classes["btn-container"]}>
              <button onClick={cancelEditedHandler}>Cancel</button>
              <button onClick={saveEditedHandler}>Save</button>
            </div>
          </>
        ) : (
          <div className={classes.front}>
            <h3>
              {enteredName} {enteredLastName}
            </h3>
            <p>
              <span>
                <GoLocation size="14px" />
              </span>
              {enteredOffice}
            </p>
            <div className={classes["social-media"]}>
              <FaLinkedin size={30} style={{ paddingRight: "10px" }} />
              <FaGithub size={30} style={{ paddingRight: "10px" }} />
              <FaTwitter size={30} style={{ paddingRight: "10px" }} />
            </div>
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default ProfileCard;
