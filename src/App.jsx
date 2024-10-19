import React, { useEffect, useState } from "react";
import EmailList from "./components/emailList";
import "./App.css";
import EmailBody from "./components/email body/EmailBody";
import Filter from "./components/filter/Filter";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const [emailData, setEmailData] = useState([]);
  const [error, setError] = useState(null);
  const [showEmailBody, setShowEmailBody] = useState(false);
  const [singleEmail, setSingleEmail] = useState({});
  const [activeEmail, setActiveEmail] = useState(null);

  // fetching email List
  const fetchData = async () => {
    try {
      const response = await fetch("https://flipkart-email-mock.vercel.app/");
      const data = await response.json();
      setEmailData([...data.list]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // Requesting email body
  const handleEmailBodyReq = (email) => {
    setShowEmailBody(true);
    email.read = true;
    setActiveEmail(email.id);
    setSingleEmail({ ...email });
  };

  //handle add/remove Favorite
  const handleFav = (targetEmail) => {
    const updateEmailData = emailData.map((email) => {
      return email.id === targetEmail.id
        ? { ...email, favorite: !targetEmail.favorite }
        : email;
    });
    setEmailData(updateEmailData);
    setSingleEmail({ ...targetEmail, favorite: !targetEmail.favorite });
  };

  const handleFilter = (filterBy) => {
    if (filterBy === "Read") {
      const updatedList = emailData.filter((item) => {
        return item.read === true;
      });
      setEmailData(updatedList);
    } else if (filterBy === "Unread") {
      const updatedList = emailData.filter((item) => {
        return item.read !== true;
      });
      setEmailData(updatedList);
    } else if (filterBy === "Favorites") {
      const updatedList = emailData.filter((item) => {
        return item.favorite === true;
      });
      setEmailData(updatedList);
    } else {
      setError("Please select valid filters");
    }
  };

  if (error) {
    return <ErrorHandler error={error} />;
  }

  return (
    <main className="container">
      <Filter handleFilter={handleFilter} />
      <div className={showEmailBody ? "emailMainContainer" : null}>
        <div className={showEmailBody ? "emailListSection" : null}>
          <EmailList
            emailData={emailData}
            handleEmailBodyReq={handleEmailBodyReq}
            showEmailBody={showEmailBody}
            activeEmail={activeEmail}
          />
        </div>
        {showEmailBody && (
          <EmailBody email={singleEmail} handleFav={handleFav} />
        )}
      </div>
    </main>
  );
}

export default App;
