import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul>
          <li>Author: Bo Harris</li>
          <li>
            <a href="mailto:CompanyName@Email.com">Email Us</a>
          </li>
          <li>
            <Link href="/privacypolicy" passHref>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
