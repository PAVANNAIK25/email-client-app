import React, { useEffect, useState } from "react";
import Email from "./single email/Email";

const EmailList = ({
  emailData,
  handleEmailBodyReq,
  showEmailBody,
  activeEmail,
}) => {
  if (emailData.length == 0) {
    return (
      <div
        style={{
          width: "400px",
          textAlign: "center",
          marginTop: "8rem",
          color: "red",
        }}
      >
        No emails to display
      </div>
    );
  }

  return (
    <>
      {emailData.map((item, index) => {
        return (
          <Email
            key={index}
            email={item}
            handleEmailBodyReq={handleEmailBodyReq}
            showEmailBody={showEmailBody}
            isActiveEmail={activeEmail === item.id}
          />
        );
      })}
    </>
  );
};

export default EmailList;
