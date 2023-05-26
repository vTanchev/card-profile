import React, { useState, useEffect } from "react";

import useInput from "../hooks/use-input";
import CardContainer from "../UI/CardContainer";

import Avatar from "../UI/Avatar";
import koala from "../assets/koala.png";
import { GoLocation } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

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
      <div className={classes.icon}>
        <FaRegEdit size={24} onClick={editHandlcer} />
      </div>
      <>
        <div className={classes["icon-container"]}></div>
      </>
      <div className={classes.avatar}>
        <Avatar src={koala} />
      </div>
      <div className={classes["profile-info"]}>
        {isEdit ? (
          <div>
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
          </div>
        ) : (
          <div className={classes["profile-info"]}>
            <div className={classes["first-name"]}>{enteredName}</div>
            <div className={classes["last-name"]}>{enteredLastName}</div>
            <div className={classes.office}>
              <span>
                <GoLocation size="14px" />
              </span>
              {enteredOffice}
            </div>
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default ProfileCard;
