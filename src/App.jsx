import React, { useEffect, useState } from "react";
import EmailList from "./components/emailList";
import "./App.css";
import EmailBody from "./components/email body/EmailBody";
import Filter from "./components/filter/Filter";
import ErrorHandler from "./components/ErrorHandler";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [emailData, setEmailData] = useState([]);
  const [error, setError] = useState(null);
  const [showEmailBody, setShowEmailBody] = useState(false);
  const [singleEmail, setSingleEmail] = useState({});
  const [activeEmail, setActiveEmail] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  // fetching email List
  const fetchData = async () => {
    try {
      const response = await fetch("https://flipkart-email-mock.vercel.app/");
      const data = await response.json();
      setEmailData([...data.list]);
      setFilteredData([...data.list]);
      setTotalPages(Math.ceil(data.total / 10));
    } catch (error) {
      setError(error.message);
    }
  };

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
    setFilteredData((prevFilterData) => {
      const update = prevFilterData.map((item) => {
        if (item.id === targetEmail.id) {
          return { ...item, favorite: !item.favorite };
        } else {
          return item;
        }
      });
      return update;
    });

    setSingleEmail({ ...targetEmail, favorite: !targetEmail.favorite });
  };

  const handleFilter = (filterBy) => {
    let filteredList = [];
    if (filterBy === "Read") {
      filteredList = emailData.filter((item) => item.read);
    } else if (filterBy === "Unread") {
      filteredList = emailData.filter((item) => !item.read);
    } else if (filterBy === "Favorites") {
      filteredList = emailData.filter((item) => item.favorite);
    } else {
      setError("Please select valid filters");
      return;
    }
    setFilteredData(filteredList);
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
            emailData={filteredData}
            handleEmailBodyReq={handleEmailBodyReq}
            showEmailBody={showEmailBody}
            activeEmail={activeEmail}
          />
        </div>
        {showEmailBody && (
          <EmailBody email={singleEmail} handleFav={handleFav} />
        )}
      </div>
      <Pagination totalPages={totalPages} pageNumber={pageNumber} />
    </main>
  );
}

export default App;
