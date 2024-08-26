import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "./Login";

const Navbar = () => {
  const { pathname } = useRouter();
  const [isActivityLogVisible, setActivityLogVisible] = useState(false);
  const [activities, setActivities] = useState(["Page Loaded"]);

  const toggleActivityLog = () => {
    setActivityLogVisible(!isActivityLogVisible);
  };

  const logActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.sitetitle} ${
          pathname === "/" ? styles.active : ""
        }`}
      >
        Privacy Explained
      </Link>
      <ul>
        <li>
          <button onClick={toggleActivityLog} className={styles.activityLogBtn}>
            Activity Log
          </button>
          {isActivityLogVisible && (
            <div className={styles.activityLogDropdown}>
              <h2>Your Activity</h2>
              <ul>
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
