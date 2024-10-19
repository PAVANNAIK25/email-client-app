import React from "react";
import Email from "./single email/Email";

const EmailList = ({
  emailData,
  handleEmailBodyReq,
  showEmailBody,
  activeEmail,
}) => {
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
