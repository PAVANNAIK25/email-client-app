import React, { useCallback, useEffect, useState } from "react";
import Styles from "./emailBody.module.css";
import ProfileIcon from "../ProfileIcon";
import formatDate from "../../utils/getDateTime";
import removeHTMLTags from "../../utils/parseHTMLFromString";
import ErrorHandler from "../ErrorHandler";

const EmailBody = ({ email, handleFav }) => {
  const [emailData, setEmailData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?id=${email.id}`
      );
      const data = await response.json();
      setEmailData({ ...data });
    } catch (error) {
      setError(error.message);
    }
  }, [email.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return <ErrorHandler error={error} />;
  }

  return (
    <section className={Styles.emailContainer}>
      <aside>
        <ProfileIcon profileName={email.from.name} />
      </aside>
      <section className={Styles.emailSection}>
        <header className={Styles.emailHeader}>
          <div>
            <h2>{email.subject}</h2>

            <button
              className={Styles.fav}
              style={{
                backgroundColor: email.favorite ? "#636363" : "#E54065",
              }}
              onClick={() => handleFav(email)}
            >
              {email.favorite ? "Remove from favorite" : "Mark as favorite"}
            </button>
          </div>
          <p>{formatDate(new Date(email.date))}</p>
        </header>
        <article className={Styles.emailBody}>
          {removeHTMLTags(emailData.body)}
        </article>
      </section>
    </section>
  );
};

export default EmailBody;
