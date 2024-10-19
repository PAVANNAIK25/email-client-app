import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import EmailList from "./coponents/emailList";
import "./App.css";
=======
import EmailList from "./components/emailList";
import "./App.css";
import EmailBody from "./components/email body/EmailBody";
>>>>>>> origin/main

function App() {
  const [emailData, setEmailData] = useState([]);
  const [error, setError] = useState(null);
<<<<<<< HEAD
=======
  const [showEmailBody, setShowEmailBody] = useState(false);
>>>>>>> origin/main

  // fetching emaillist
  const fetchData = async () => {
    const response = await fetch("https://flipkart-email-mock.vercel.app/");
    return await response.json();
  };

  useEffect(() => {
    fetchData()
      .then((dataList) => {
        console.log(dataList.list);
        setEmailData([...dataList.list]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "8rem",
          color: "red",
          fontWeight: "bold",
          backdropFilter: "blur",
          fontSize: "3rem",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <main className="container">
      <div>filter</div>
<<<<<<< HEAD
      <EmailList emailData={emailData} />
=======
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "space-between",
        }}
      >
        <div>
          <EmailList emailData={emailData} />
        </div>
        <EmailBody />
      </div>
>>>>>>> origin/main
    </main>
  );
}

export default App;
