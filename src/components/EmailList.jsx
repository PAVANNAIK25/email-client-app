import React from "react";
import Email from "./singleEmail/Email";

const EmailList = ({ emailData }) => {
  return (
    <>
      {emailData.map((item, index) => {
        return <Email key={index} email={item} />;
      })}
    </>
  );
};

export default EmailList;
