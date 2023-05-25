import React, { useState, useEffect } from "react";

import CardContainer from "../UI/CardContainer";

import classes from "./ProfileCard.module.css";

import Avatar from "../UI/Avatar";
import koala from "../assets/koala.png";
import { GoLocation } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

const ProfileCard = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [officeLocation, setOfficeLocation] = useState("Office location");

  const editHandlcer = () => {
    setIsEdit((prevState) => !prevState);
  };

  const firstNameOnChangeHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameOnChangeHandler = (e) => {
    setLastName(e.target.value);
  };
  const officeLocationOnChangeHandler = (e) => {
    setOfficeLocation(e.target.value);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedOfficeLocation = localStorage.getItem("officeLocation");

    if (storedName) {
      setFirstName(storedName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
    if (storedOfficeLocation) {
      setOfficeLocation(storedOfficeLocation);
    }
  }, []);

  const cancelEditedHandler = () => {
    setIsEdit(false);
  };

  const saveEditedHandler = () => {
    setIsEdit(false);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("officeLocation", officeLocation);
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
                value={firstName}
                onChange={firstNameOnChangeHandler}
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className={classes["input-container"]}>
              <input
                value={lastName}
                onChange={lastNameOnChangeHandler}
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className={classes["input-container"]}>
              <input
                value={officeLocation}
                onChange={officeLocationOnChangeHandler}
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
            <div className={classes["first-name"]}>{firstName}</div>
            <div className={classes["last-name"]}>{lastName}</div>
            <div className={classes.office}>
              <span>
                <GoLocation size="14px" />
              </span>
              {officeLocation}
            </div>
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default ProfileCard;
