import React, { useEffect, useState } from "react";
import EmailList from "./coponents/emailList";
import "./App.css";

function App() {
  const [emailData, setEmailData] = useState([]);
  const [error, setError] = useState(null);

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
      <EmailList emailData={emailData} />
    </main>
  );
}

export default App;
