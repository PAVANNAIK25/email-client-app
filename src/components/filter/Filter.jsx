import React, { useState } from "react";
import Styles from "./filter.module.css";

const Filter = ({ handleFilter }) => {
  const [active, setActive] = useState(null);

  const handleFilterInternal = (e) => {
    setActive(e.target.innerText);
    handleFilter(e.target.innerText);
  };

  return (
    <section className={Styles.filterContainer}>
      <ul>
        <li>Filter By: </li>
        <li
          onClick={(e) => handleFilterInternal(e)}
          className={active === "Unread" ? Styles.active : null}
        >
          Unread
        </li>
        <li
          onClick={(e) => handleFilterInternal(e)}
          className={active === "Read" ? Styles.active : null}
        >
          Read
        </li>
        <li
          onClick={(e) => handleFilterInternal(e)}
          className={active === "Favorites" ? Styles.active : null}
        >
          Favorites
        </li>
      </ul>
    </section>
  );
};

export default Filter;
