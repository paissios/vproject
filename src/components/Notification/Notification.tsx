import { useState } from "react";
import classes from "./Notification.module.scss";
import { Link } from "react-router-dom";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div
      className={`${classes.notificationWrapper} ${
        showNotification ? classes.show : ""
      }`}
    >
      <div className={classes.rightSection}>
        <p>Need help?</p>
        <Link to="/contact-us">Contact us</Link>
        <button
          type="button"
          className={classes.closeButton}
          onClick={() => setShowNotification(false)}
        />
      </div>
    </div>
  );
};

export default Notification;
