import React, { useState } from "react";
import Styles from "./email.module.css";
import formatDate from "../../utils/getDateTime";
import ProfileIcon from "../ProfileIcon";

const Email = ({ email, handleEmailBodyReq, showEmailBody, isActiveEmail }) => {
  return (
    <section
      className={`${Styles.emailContainer} ${
        showEmailBody ? Styles.adjustWidthContainer : null
      } ${isActiveEmail ? Styles.activeEmail : null}`}
      onClick={(e) => handleEmailBodyReq(email)}
      style={!email.read ? { backgroundColor: "var(--bg-secondary)" } : null}
    >
      <div className={Styles.leftSection}>
        <ProfileIcon profileName={email.from.name} />
      </div>
      <div className={Styles.rightSection}>
        <div>
          <span>From: </span>
          <span>
            {email.from.name}
            {" <"}
            <a href={`mailto:${email.from.email}`}>{email.from.email}</a> {">"}
          </span>
        </div>
        <div>
          <span>Subject: </span>
          <span className={Styles.subject}>{email.subject}</span>
        </div>
        <div
          className={`${Styles.description} ${
            showEmailBody ? Styles.adjustWidthDescription : null
          }`}
        >
          {email.short_description}
        </div>
        <div className={Styles.dateSection}>
          <span>{formatDate(new Date(email.date))}</span>
          {email.favorite && <span className={Styles.fav}> Favourite</span>}
        </div>
      </div>
    </section>
  );
};

export default Email;
