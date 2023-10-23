import Image from "next/image";
import styles from "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className={styles.main}>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>
              <abbr title="Birthday Date">Birthday</abbr>
            </th>
            <th>
              <abbr title="Phone Number">Phone</abbr>
            </th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>1</th>
            <td>John</td>
            <td>smith@gmail.com</td>
            <td>09-08-51</td>
            <td>
              <a href="tel:+380236057340">+380236057340</a>
            </td>
            <td>
              <address>Unit 0052 Box 8810\nDPO AP 81719</address>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
