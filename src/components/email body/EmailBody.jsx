import React from "react";
import Styles from "./emailBody.module.css";
import ProfileIcon from "../ProfileIcon";

const EmailBody = () => {
  return (
    <section className={Styles.emailContainer}>
      <aside>
        <ProfileIcon profileName={"foo"} />
      </aside>
      <section className={Styles.emailSection}>
        <header className={Styles.emailHeader}>
          <div>
            <h2>Lorem ipsum</h2>
            <div className={Styles.fav}>Mark as Favourite</div>
          </div>
          <p>Saturday, 19 October 2024</p>
        </header>
        <article>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt esse
          voluptas deserunt at earum vel recusandae vero nam, eius sint unde
          praesentium quis fugiat enim illo. Porro nam reiciendis ipsam est a
          nihil, temporibus sed corporis impedit ab praesentium quos dolorem
          esse animi! Quisquam soluta accusamus inventore eum enim cum,
          perferendis ipsam molestias nulla fugit cumque praesentium! Velit
          expedita tempore voluptatibus maxime dolore pariatur dicta libero
          voluptate at. Beatae corporis nulla fuga praesentium cum, dolorum
          harum minus explicabo laudantium doloribus. Dolores laborum vero
          voluptatum aut repudiandae ducimus reiciendis quia officia saepe
          obcaecati nobis optio velit facilis itaque deserunt, corporis, modi
          possimus voluptatibus! Aut quibusdam dolorem at tempora eveniet
          dolore. Hic dicta amet nostrum ipsum unde perspiciatis sint optio,
          magni vero excepturi placeat nesciunt debitis odit nisi sit esse
          veritatis iure eligendi deleniti nihil natus doloribus, quaerat
          minima. Deserunt eius qui accusamus eaque quisquam, commodi officiis
          architecto repudiandae ducimus nam quod!
        </article>
      </section>
    </section>
  );
};

export default EmailBody;
