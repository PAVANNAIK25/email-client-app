import React from "react";
import Styles from "./email.module.css";
import formatDate from "../../utils/getDateTime";

const Email = ({ email }) => {
  return (
    <section className={Styles.emailContainer}>
      <div className={Styles.leftSection}>
        <div className={Styles.circle}>
          {email.from.name.slice(0, 1).toUpperCase()}
        </div>
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
          <span>{email.subject}</span>
        </div>
        <div>{email.short_description}</div>
        <div>
          <span>{formatDate(new Date(email.date))}</span>
          <span> Favourite</span>
        </div>
      </div>
    </section>
  );
};

export default Email;
